import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';

const ReferAnalytics = (data) => {
  const copyLink = (e, link) => {
    e.preventDefault();
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="row refer">
      <div className="page-title">Refer Dashboard</div>
      <div className="refer-container mt10">
        <div className="currentPoints text-center">
          <div className="point verticle-center">
            {data.data.points} <span className="points">points</span>
          </div>
        </div>
        <div className="refer-shareable">
          <div className="link">
            <div className="my-link">
              <p className="verticle-center break-word">{data.data.referLink}</p>
              <div className="social verticle-center">
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
              <p className="verticle-center text-center copy" onClick={(e) => copyLink(e, `${data.data.referLink}`)}>
                COPY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAnalytics;
