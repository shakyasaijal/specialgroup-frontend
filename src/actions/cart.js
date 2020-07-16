export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';

export const CART_REQUEST = 'CART_REQUEST';
export const CART_UPDATE = 'CART_UPDATE';

export const CART_BY_PRODUCT_ID_REQUEST = 'CART_BY_PRODUCT_ID_REQUEST';
export const CART_BY_PRODUCT_ID_UPDATE = 'CART_BY_PRODUCT_ID_UPDATE';

export function addToCartRequest(productId, quantity, callbackSuccess = null, callbackError = null) {
  return {
    type: ADD_TO_CART_REQUEST,
    productId,
    quantity,
    callbackSuccess,
    callbackError,
  };
}

export function cartRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: CART_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function cartUpdate(cart) {
  return {
    type: CART_UPDATE,
    cart,
  };
}

export function cartByProductIdRequest(productId, callbackSuccess = null, callbackError = null) {
  return {
    type: CART_BY_PRODUCT_ID_REQUEST,
    productId,
    callbackSuccess,
    callbackError,
  };
}

export function cartByProductIdUpdate(cartByProductId) {
  return {
    type: CART_BY_PRODUCT_ID_UPDATE,
    cartByProductId,
  };
}
