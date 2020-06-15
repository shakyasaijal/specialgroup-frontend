import React from 'react';
import { getImageUrl } from '../../../constants/constants';

const SocialAuth = (props) => {
  let auth_for = props.for === 'sign-in' ? 'in' : 'up';
  return (
    <div className="grid2">
      <div className="google-login">
        <div class="google-icon-wrapper">
          <img class="google-icon-svg" alt="Google" src={getImageUrl('/images/Google__G__Logo.svg')} />
        </div>
        <p class="btn-text">
          <b>Sign {auth_for} with Google</b>
        </p>
      </div>
      <div className="facebook-login">
        <div class="facebook-icon-wrapper">
          <img class="facebook-icon-svg" alt="Facebook" src={getImageUrl('/images/square-facebook-512.webp')} />
        </div>
        <p class="btn-text">
          <b>Sign {auth_for} with Facebook</b>
        </p>
      </div>
    </div>
  );
};

export default SocialAuth;
