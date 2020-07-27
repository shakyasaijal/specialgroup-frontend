import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import ReferAnalytics from './Components/ReferAnalytics';
import ReferNow from './Components/ReferNow';
import ReferHistory from './Components/ReferHistory';

import { referralLinkRequest, referralInfoRequest } from 'actions/referral';

import { getReferral, getReferralInfo } from 'selectors/referral';

import { referData } from 'constants/constants';

const ReferDashboard = (props) => {
  const data = referData()[0];
  const { analytics, history } = data;
  const [referralLoaded, setReferralLoaded] = useState(false);
  const [referralInfoLoaded, setReferralInfoLoaded] = useState(false);

  useEffect(() => {
    props.referralLinkRequest(referralLoadSuccess);
    props.referralInfoRequest(referralInfoLoadSuccess);
    // eslint-disable-next-line
  }, []);

  const referralLoadSuccess = () => {
    setReferralLoaded(true);
  };

  const referralInfoLoadSuccess = () => {
    setReferralInfoLoaded(true);
  };

  return (
    <div className="refer">
      <div className="top-ads">
        <FullWidthAd large={data.bannerAds.large} small={data.bannerAds.small} />
      </div>
      <ReferNow
        referralLoaded={referralLoaded}
        referral={props.referral}
        referralInfoLoaded={referralInfoLoaded}
        referralInfo={props.referralInfo}
      />
      {referralInfoLoaded && <ReferAnalytics referralInfo={props.referralInfo} data={analytics} />}
      <ReferHistory data={history} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    referral: getReferral(state),
    referralInfo: getReferralInfo(state),
  };
};
const dispatchProps = { referralLinkRequest, referralInfoRequest };

export default connect(mapStateToProps, dispatchProps)(ReferDashboard);
