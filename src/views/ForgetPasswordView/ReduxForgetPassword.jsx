import { connect } from 'react-redux';

import { resetPasswordRequest } from 'actions/account';

import ForgetPassword from './ForgetPassword';

const dispatchProps = { resetPasswordRequest };

export default connect(null, dispatchProps)(ForgetPassword);
