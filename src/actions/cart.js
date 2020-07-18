export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';

export const CART_REQUEST = 'CART_REQUEST';
export const CART_UPDATE = 'CART_UPDATE';

export const CHANGE_CART_REQUEST = 'CHANGE_CART_REQUEST';

export const CART_DELETE_REQUEST = 'CART_DELETE_REQUEST';

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

export function changeCartRequest(id, quantity, callbackSuccess = null, callbackError = null) {
  return {
    type: CHANGE_CART_REQUEST,
    id,
    quantity,
    callbackSuccess,
    callbackError,
  };
}

export function cartDeleteRequest(id, callbackSuccess = null, callbackError = null) {
  return {
    type: CART_DELETE_REQUEST,
    id,
    callbackSuccess,
    callbackError,
  };
}
