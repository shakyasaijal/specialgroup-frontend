export const ACCOUNT_INFO_REQUEST = 'ACCOUNT_INFO_REQUEST';
export const ACCOUNT_INFO_UPDATE = 'ACCOUNT_INFO_UPDATE';

export const UPDATE_ACCOUNT_INFO_REQUEST = 'UPDATE_ACCOUNT_INFO_REQUEST';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';

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

export function resetPasswordRequest(email, callbackSuccess = null, callbackError = null) {
  return {
    type: RESET_PASSWORD_REQUEST,
    email,
    callbackSuccess,
    callbackError,
  };
}

export function changePasswordRequest(
  oldPassword,
  newPassword,
  confirmPassword,
  callbackSuccess = null,
  callbackError = null
) {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    oldPassword,
    newPassword,
    confirmPassword,
    callbackSuccess,
    callbackError,
  };
}

export function updateAccountInfo(
  phone = '',
  address = '',
  firstName = '',
  lastName = '',
  district = '',
  callbackSuccess = null,
  callbackError = null
) {
  return {
    type: UPDATE_ACCOUNT_INFO_REQUEST,
    phone,
    address,
    firstName,
    lastName,
    district,
    callbackSuccess,
    callbackError,
  };
}
