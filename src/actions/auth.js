export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';

export function authLoginRequest(email, password, callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_LOGIN_REQUEST,
    email,
    password,
    callbackSuccess,
    callbackError,
  };
}

export function authLogoutRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_LOGOUT_REQUEST,
    callbackSuccess,
    callbackError,
  };
}
