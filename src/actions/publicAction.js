export const LOCATION_MAP_REQUEST = 'LOCATION_MAP_REQUEST';
export const LOCATION_MAP_UPDATE = 'LOCATION_MAP_UPDATE';

export const MARKETING_PLATFORM_REQUEST = 'MARKETING_PLATFORM_REQUEST';
export const MARKETING_PLATFORM_UPDATE = 'MARKETING_PLATFORM_UPDATE';

export const POPULAR_CATEGORY_REQUEST = 'POPULAR_CATEGORY_REQUEST';
export const POPULAR_CATEGORY_UPDATE = 'POPULAR_CATEGORY_UPDATE';

export function locationMapRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: LOCATION_MAP_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function locationMapUpdate(locationMap) {
  return {
    type: LOCATION_MAP_UPDATE,
    locationMap,
  };
}

export function marketingPlatformRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: MARKETING_PLATFORM_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function marketingPlatformUpdate(marketingPlatforms) {
  return {
    type: MARKETING_PLATFORM_UPDATE,
    marketingPlatforms,
  };
}

export function popularCategoryRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: POPULAR_CATEGORY_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function popularCategoryUpdate(popularCategories) {
  return {
    type: POPULAR_CATEGORY_UPDATE,
    popularCategories,
  };
}
