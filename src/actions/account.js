export const ACCOUNT_INFO_REQUEST = 'ACCOUNT_INFO_REQUEST';
export const ACCOUNT_INFO_UPDATE = 'ACCOUNT_INFO_UPDATE';

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';

export function accountInfoRequest(userId, callbackSuccess = null, callbackError = null) {
  return {
    type: ACCOUNT_INFO_REQUEST,
    userId,
    callbackSuccess,
    callbackError,
  };
}

export function accountInfoUpdate(account) {
  return {
    type: ACCOUNT_INFO_UPDATE,
    account,
  };
}

export function passwordResetRequest(email, callbackSuccess, callbackError) {
  return {
    type: PASSWORD_RESET_REQUEST,
    email,
    callbackSuccess,
    callbackError,
  };
}
