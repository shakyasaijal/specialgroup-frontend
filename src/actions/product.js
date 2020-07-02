export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_UPDATE = 'PRODUCT_LIST_UPDATE';

export function productListRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: PRODUCT_LIST_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function productListUpdate(products) {
  return {
    type: PRODUCT_LIST_UPDATE,
    products,
  };
}
