import { connect } from 'react-redux';

import Home from './Home';

import { isLoggedIn } from 'selectors/auth';
import { isProfileCompleted } from 'selectors/account';
import { completeLaterClickedBefore1Day } from 'selectors/notificationTS';

import { handleClickRequest, referralCodeUpdate } from 'actions/referral';
import { getReferralCode } from 'selectors/referral';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    completeLaterClickedBefore1Day: completeLaterClickedBefore1Day(state),
    isProfileCompleted: isProfileCompleted(state),
    referralCode: getReferralCode(state),
  };
};

const dispatchProps = { handleClickRequest, referralCodeUpdate };

export default connect(mapStateToProps, dispatchProps)(Home);
