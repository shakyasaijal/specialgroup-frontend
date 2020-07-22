import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import { referralLinkRequest } from 'actions/referral';

import { getReferral } from 'selectors/referral';

const ReferAnalytics = (props) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const [referralLoaded, setReferralLoaded] = useState(false);

  const copyLink = (e, link) => {
    e.preventDefault();
    navigator.clipboard.writeText(link);
    setLinkCopied(true);
  };

  useEffect(() => {
    props.referralLinkRequest(referralLoadSuccess);
    // eslint-disable-next-line
  }, []);

  const referralLoadSuccess = () => {
    setReferralLoaded(true);
  };

  return (
    <div className="row refer">
      <div className="page-title">Refer Dashboard</div>
      <div className="refer-container mt10">
        <div className="currentPoints text-center">
          <div className="point vertical-center">
            {props.data.points} <span className="points">points</span>
          </div>
        </div>
        <div className="refer-shareable">
          {referralLoaded && (
            <div className="link">
              <div className="my-link">
                <p className="vertical-center break-word">{props.referral.referralLink}</p>
                <div className="social vertical-center">
                  <Link to="/">
                    <FacebookIcon />
                  </Link>
                  <Link to="/">
                    <TwitterIcon />
                  </Link>
                  <Link to="/">
                    <LinkedInIcon />
                  </Link>
                  <Link to="/">
                    <EmailIcon />
                  </Link>
                </div>
              </div>
              <div className="copy-link">
                {!linkCopied && (
                  <p
                    className="vertical-center text-center copy"
                    onClick={(e) => copyLink(e, props.referral.referralLink)}
                  >
                    COPY
                  </p>
                )}
                {linkCopied && <p className="vertical-center text-center copied">COPIED</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    referral: getReferral(state),
  };
};
const dispatchProps = { referralLinkRequest };

export default connect(mapStateToProps, dispatchProps)(ReferAnalytics);
