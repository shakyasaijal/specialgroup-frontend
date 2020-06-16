import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login//dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import { getImageUrl } from 'constants/constants';

const GoogleAuthButton = ({ onClick, authFor }) => {
  return (
    <div className="google-login" onClick={onClick}>
      <div className="google-icon-wrapper">
        <img className="google-icon-svg" alt="Google" src={getImageUrl('/images/Google__G__Logo.svg')} />
      </div>
      <p className="btn-text">
        <b>Sign {authFor} with Google</b>
      </p>
    </div>
  );
};

const FacebookAuthButton = ({ onClick, authFor }) => {
  return (
    <div className="facebook-login" onClick={onClick}>
      <div className="facebook-icon-wrapper">
        <img className="facebook-icon-svg" alt="Facebook" src={getImageUrl('/images/square-facebook-512.webp')} />
      </div>
      <p className="btn-text">
        <b>Sign {authFor} with Facebook</b>
      </p>
    </div>
  );
};

const SocialAuth = (props) => {
  const { authFailure, setAuthFailure } = useState('');
  const { label, authGoogleLoginRequest, authFacebookLoginRequest, callbackSuccess, callbackError } = props;
  const authFor = label === 'sign-in' ? 'in' : 'up';

  const onSuccessGoogleAuth = (response) => {
    authGoogleLoginRequest(response.tokenId, callbackSuccess, callbackError);
  };

  const onFailureGoogleAuth = () => {
    setAuthFailure('Your Google account rejected this request. Please Try again later.');
  };

  const onSuccessFacebookAuth = (response) => {
    authFacebookLoginRequest(response.accessToken, callbackSuccess, callbackError);
  };

  const onFailureFacebookAuth = () => {
    setAuthFailure('Your Facebook account rejected this request. Please Try again later.');
  };

  return (
    <div className="grid2">
      <GoogleLogin
        clientId="242138548144-jl9madoqvbrcdv9tphqjk06a49h74j5i.apps.googleusercontent.com"
        render={(renderProps) => <GoogleAuthButton onClick={renderProps.onClick} authFor={authFor} />}
        onSuccess={onSuccessGoogleAuth}
        onFailure={onFailureGoogleAuth}
      />
      <FacebookLogin
        appId="318504315811628"
        render={(renderProps) => <FacebookAuthButton onClick={renderProps.onClick} authFor={authFor} />}
        callback={onSuccessFacebookAuth}
        onFailure={onFailureFacebookAuth}
      />
      {authFailure && <div className="error">{authFailure}</div>}
    </div>
  );
};

export default SocialAuth;
