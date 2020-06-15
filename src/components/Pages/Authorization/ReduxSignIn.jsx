import { connect } from 'react-redux';

import { authLoginRequest } from 'actions/auth';

import SignIn from './SignIn';
import { isLoggedIn } from 'selectors/auth';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};

const dispatchProps = { authLoginRequest };

const ReduxSignIn = connect(mapStateToProps, dispatchProps)(SignIn);

export default ReduxSignIn;
