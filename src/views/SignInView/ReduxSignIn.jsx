import { connect } from 'react-redux';

import { authLoginRequest, authGoogleRequest, authFacebookRequest } from 'actions/auth';

import SignIn from './SignIn';

const dispatchProps = { authLoginRequest, authGoogleRequest, authFacebookRequest };

const ReduxSignIn = connect(null, dispatchProps)(SignIn);

export default ReduxSignIn;
