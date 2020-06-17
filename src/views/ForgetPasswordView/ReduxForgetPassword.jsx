import { connect } from 'react-redux';

import { passwordResetRequest } from 'actions/account';

import ForgetPassword from './ForgetPassword';

const dispatchProps = { passwordResetRequest };

export default connect(null, dispatchProps)(ForgetPassword);
