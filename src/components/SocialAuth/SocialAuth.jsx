import React from 'react';
import { getImageUrl } from '../../constants/constants';

const SocialAuth = (props) => {
  let auth_for = props.for === 'sign-in' ? 'in' : 'up';
  return (
    <div className="grid2">
      <div className="google-login">
        <div className="google-icon-wrapper">
          <img className="google-icon-svg" src={getImageUrl('/images/Google__G__Logo.svg')} />
        </div>
        <p className="btn-text">
          <b>Sign {auth_for} with Google</b>
        </p>
      </div>
      <div className="facebook-login">
        <div className="facebook-icon-wrapper">
          <img className="facebook-icon-svg" src={getImageUrl('/images/square-facebook-512.webp')} />
        </div>
        <p className="btn-text">
          <b>Sign {auth_for} with Facebook</b>
        </p>
      </div>
    </div>
  );
};

export default SocialAuth;
