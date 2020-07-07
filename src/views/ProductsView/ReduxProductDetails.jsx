import { connect } from 'react-redux';

import ProductDetails from './ProductDetails';

import { productDetailsRequest } from 'actions/product';

import { isLoggedIn } from 'selectors/auth';
import { getProductDetails } from 'selectors/product';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    productDetails: getProductDetails(state),
  };
};

const dispatchProps = { productDetailsRequest };

export default connect(mapStateToProps, dispatchProps)(ProductDetails);
