export const NOTIFICATION_TIMESTAMP_REQUEST = 'NOTIFICATION_TIMESTAMP_REQUEST';
export const NOTIFICATION_TIMESTAMP_UPDATE = 'NOTIFICATION_TIMESTAMP_UPDATE';

export function notificationTSRequest(field, callbackSuccess = null, callbackError = null) {
  return {
    type: NOTIFICATION_TIMESTAMP_REQUEST,
    field,
    callbackSuccess,
    callbackError,
  };
}

export function notificationTSUpdate(notification) {
  return {
    type: NOTIFICATION_TIMESTAMP_UPDATE,
    notification,
  };
}
