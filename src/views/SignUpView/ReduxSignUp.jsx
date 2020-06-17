import { connect } from 'react-redux';

import { authRegisterRequest, authGoogleRequest, authFacebookRequest } from 'actions/auth';

import SignUp from './SignUp';

const dispatchProps = { authRegisterRequest, authGoogleRequest, authFacebookRequest };

const ReduxSignUp = connect(null, dispatchProps)(SignUp);

export default ReduxSignUp;
