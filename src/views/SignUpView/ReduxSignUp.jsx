import { connect } from 'react-redux';

import { authRegisterRequest, authGoogleRequest, authFacebookRequest } from 'actions/auth';

import { isLoggedIn } from 'selectors/auth';

import SignUp from './SignUp';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};

const dispatchProps = { authRegisterRequest, authGoogleRequest, authFacebookRequest };

const ReduxSignUp = connect(mapStateToProps, dispatchProps)(SignUp);

export default ReduxSignUp;
