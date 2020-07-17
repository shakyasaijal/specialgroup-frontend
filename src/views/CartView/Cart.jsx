import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { cartRequest, cartDeleteRequest } from 'actions/cart';

import { getCart } from 'selectors/cart';
import { isAccountVerified } from 'selectors/auth';

import CartTable from './components/CartTable';

const Cart = (props) => {
  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    props.cartRequest(callbackSuccess);
    // eslint-disable-next-line
  }, []);

  const callbackSuccess = () => {
    setCartLoaded(true);
  };

  return cartLoaded ? (
    <CartTable cart={props.cart} cartDeleteRequest={props.cartDeleteRequest} isVerified={props.isVerified} />
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    isVerified: isAccountVerified(state),
    cart: getCart(state),
  };
};

const dispatchProps = { cartRequest, cartDeleteRequest };

export default connect(mapStateToProps, dispatchProps)(Cart);
