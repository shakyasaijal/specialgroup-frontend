export const SHOP_BY_CATEGORY_REQUEST = 'SHOP_BY_CATEGORY_REQUEST';
export const SHOP_BY_CATEGORY_UPDATE = 'SHOP_BY_CATEGORY_UPDATE';

export const POPULAR_PRODUCT_REQUEST = 'POPULAR_PRODUCT_REQUEST';
export const POPULAR_PRODUCT_UPDATE = 'POPULAR_PRODUCT_UPDATE';

export const RECOMMENDED_PRODUCT_REQUEST = 'RECOMMENDED_PRODUCT_REQUEST';
export const RECOMMENDED_PRODUCT_UPDATE = 'RECOMMENDED_PRODUCT_UPDATE';

export const RECENT_ARRIVALS_REQUEST = 'RECENT_ARRIVALS_REQUEST';
export const RECENT_ARRIVALS_UPDATE = 'RECENT_ARRIVALS_UPDATE';

export const FOR_YOU_PRODUCT_REQUEST = 'FOR_YOU_PRODUCT_REQUEST';
export const FOR_YOU_PRODUCT_UPDATE = 'FOR_YOU_PRODUCT_UPDATE';

export function shopByCategoryRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: SHOP_BY_CATEGORY_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function shopByCategoryUpdate(product) {
  return {
    type: SHOP_BY_CATEGORY_UPDATE,
    product,
  };
}

export function popularProductRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: POPULAR_PRODUCT_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function popularProductUpdate(product) {
  return {
    type: POPULAR_PRODUCT_UPDATE,
    product,
  };
}

export function recommendedProductRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: RECOMMENDED_PRODUCT_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function recommendedProductUpdate(product) {
  return {
    type: RECOMMENDED_PRODUCT_UPDATE,
    product,
  };
}

export function recentArrivalsRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: RECENT_ARRIVALS_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function recentArrivalsUpdate(product) {
  return {
    type: RECENT_ARRIVALS_UPDATE,
    product,
  };
}

export function forYouProductRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: FOR_YOU_PRODUCT_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function forYouProductUpdate(product) {
  return {
    type: FOR_YOU_PRODUCT_UPDATE,
    product,
  };
}
