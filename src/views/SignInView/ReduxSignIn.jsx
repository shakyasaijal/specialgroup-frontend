import { connect } from 'react-redux';

import { authLoginRequest, authGoogleLoginRequest, authFacebookLoginRequest } from 'actions/auth';

import { isLoggedIn } from 'selectors/auth';

import SignIn from './SignIn';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};

const dispatchProps = { authLoginRequest, authGoogleLoginRequest, authFacebookLoginRequest };

const ReduxSignIn = connect(mapStateToProps, dispatchProps)(SignIn);

export default ReduxSignIn;
