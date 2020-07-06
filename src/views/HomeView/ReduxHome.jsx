import { connect } from 'react-redux';

import Home from './Home';

import { isLoggedIn } from 'selectors/auth';
import { isProfileCompleted } from 'selectors/account';
import { completeLaterClickedBefore1Day } from 'selectors/notificationTS';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    completeLaterClickedBefore1Day: completeLaterClickedBefore1Day(state),
    isProfileCompleted: isProfileCompleted(state),
  };
};

export default connect(mapStateToProps, {})(Home);
