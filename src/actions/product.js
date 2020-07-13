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

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_UPDATE = 'PRODUCT_DETAILS_UPDATE';

export const BANNER_DATA_REQUEST = 'BANNER_DATA_REQUEST';
export const BANNER_DATA_UPDATE = 'BANNER_DATA_UPDATE';

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

export function productDetailsRequest(id, callbackSuccess = null, callbackError = null) {
  return {
    type: PRODUCT_DETAILS_REQUEST,
    id,
    callbackSuccess,
    callbackError,
  };
}

export function productDetailsUpdate(productDetails) {
  return {
    type: PRODUCT_DETAILS_UPDATE,
    productDetails,
  };
}

export function bannerDataRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: BANNER_DATA_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function bannerDataUpdate(product) {
  return {
    type: BANNER_DATA_UPDATE,
    product,
  };
}
