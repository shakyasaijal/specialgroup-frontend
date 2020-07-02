import { connect } from 'react-redux';

import { productListRequest } from 'actions/product';

import Home from './Home';

import { isLoggedIn } from 'selectors/auth';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    products: state.products,
  };
};

const dispatchProps = { productListRequest };

export default connect(mapStateToProps, dispatchProps)(Home);
