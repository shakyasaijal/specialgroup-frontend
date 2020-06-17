import React from 'react';

import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  const verified = false;
  return (
    <>
      <Navigation />
      {!verified ? (
        <div className="warning-wrapper">
          <div className="warning">
            Please verify your account.
            <div className="float-right">
              <Link to="/" className="warning-button">
                Resend Verification Link
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
