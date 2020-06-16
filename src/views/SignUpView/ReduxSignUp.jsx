import { connect } from 'react-redux';

import { authRegisterRequest } from 'actions/auth';

import SignUp from './SignUp';

const dispatchProps = { authRegisterRequest };

const ReduxSignUp = connect(null, dispatchProps)(SignUp);

export default ReduxSignUp;
