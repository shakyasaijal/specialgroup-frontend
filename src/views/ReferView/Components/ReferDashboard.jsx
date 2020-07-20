import React from 'react';
import FullWidthAd from 'components/Advertisement/FullWidthAd';
import { referData } from 'constants/constants';
import ReferAnalytics from './ReferAnalytics';
import ReferNow from './ReferNow';
import ReferHistory from './ReferHistory';
import { Redirect } from 'react-router-dom';

const ReferDashboard = () => {
  const data = referData()[0];
  const { referNow, analytics, history } = data;
  const isVerified = true;

  if (!isVerified) {
    // And pass message as "Verify your account first"
    return <Redirect to="/" />;
  }
  
  return (
    <div className="refer">
      <div className="top-ads">
        <FullWidthAd large={data.bannerAds.large} small={data.bannerAds.small} />
      </div>
      <ReferNow data={referNow} />
      <ReferAnalytics data={analytics} />
      <ReferHistory data={history} />
    </div>
  );
};

export default ReferDashboard;
