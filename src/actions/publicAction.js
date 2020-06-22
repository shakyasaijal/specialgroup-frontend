export const LOCATION_MAP_REQUEST = 'LOCATION_MAP_REQUEST';
export const LOCATION_MAP_UPDATE = 'LOCATION_MAP_UPDATE';

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
