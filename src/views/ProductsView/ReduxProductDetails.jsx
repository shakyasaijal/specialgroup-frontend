import { connect } from 'react-redux';

import ProductDetails from './ProductDetails';

import { productDetailsRequest } from 'actions/product';
import { addToCartRequest, cartByProductIdRequest } from 'actions/cart';

import { isLoggedIn } from 'selectors/auth';
import { getProductDetails } from 'selectors/product';
import { getCartByProductId } from 'selectors/cart';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    productDetails: getProductDetails(state),
    cartByProductId: getCartByProductId(state),
  };
};

const dispatchProps = { productDetailsRequest, addToCartRequest, cartByProductIdRequest };

export default connect(mapStateToProps, dispatchProps)(ProductDetails);
