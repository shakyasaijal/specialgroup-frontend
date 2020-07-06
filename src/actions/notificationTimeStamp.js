export const NOTIFICATION_TIMESTAMP_REQUEST = 'NOTIFICATION_TIMESTAMP_REQUEST';

export function notificationTSRequest(field, callbackSuccess = null, callbackError = null) {
  return {
    type: NOTIFICATION_TIMESTAMP_REQUEST,
    field,
    callbackSuccess,
    callbackError,
  };
}
