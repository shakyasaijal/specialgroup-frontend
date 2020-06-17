import { connect } from 'react-redux';

import Home from './Home';

import { isLoggedIn } from 'selectors/auth';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};

export default connect(mapStateToProps, {})(Home);
