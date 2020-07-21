import React from 'react';
import { aboutRefer } from 'constants/constants';
import { Link } from 'react-router-dom';
import PATHS from 'routes';

const Refer = () => {
  const data = aboutRefer()[0];
  const isLoggedIn = true;
  const isVerified = true;

  return (
    <div className="row aboutRefer">
      <div className="info-container">
        <div className="image-container">
          <img src={data.image} alt="Refer a friend" />
        </div>
        <div className="content mt10">
          <div className="lh" dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="goto mt30">
          {isLoggedIn && isVerified ? (
            <Link to={PATHS.REFER_DASHBOARD} className="goto-refer">
              Go to "My Dashboard"
            </Link>
          ) : (
            'Verify your account to get access.'
          )}
        </div>
      </div>
    </div>
  );
};

export default Refer;
