export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';

export const CART_DATA_REQUEST = 'CART_DATA_REQUEST';
export const CART_DATA_UPDATE = 'CART_DATA_UPDATE';

export function addToCartRequest(productId, quantity, callbackSuccess = null, callbackError = null) {
  return {
    type: ADD_TO_CART_REQUEST,
    productId,
    quantity,
    callbackSuccess,
    callbackError,
  };
}

export function cartDataRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: CART_DATA_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function cartDataUpdate(cart) {
  return {
    type: CART_DATA_UPDATE,
    cart,
  };
}
