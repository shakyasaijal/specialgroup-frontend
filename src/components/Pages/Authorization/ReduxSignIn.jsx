import { connect } from 'react-redux';

import { authLoginRequest } from 'actions/auth';

import SignIn from './SignIn';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: true,
  };
};

const dispatchProps = { authLoginRequest };

const ReduxSignIn = connect(mapStateToProps, dispatchProps)(SignIn);

export default ReduxSignIn;
