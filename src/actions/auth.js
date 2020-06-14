export const AUTH_CLEAR_STORE = 'AUTH_CLEAR_STORE';
export const AUTH_RESET_STORE = 'AUTH_RESET_STORE';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';

export const AUTH_INFO_UPDATE = 'AUTH_INFO_UPDATE';
export const AUTH_TOKENS_UPDATE = 'AUTH_TOKENS_UPDATE';

export function authClearStore() {
  return {
    type: AUTH_CLEAR_STORE,
  };
}

export function authResetStore() {
  return {
    type: AUTH_RESET_STORE,
  };
}

export function authLoginRequest(email, password, csrfmiddlewaretoken, callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_LOGIN_REQUEST,
    email,
    password,
    csrfmiddlewaretoken,
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

export function authInfoUpdate(userId, accessToken, refreshToken) {
  return {
    type: AUTH_INFO_UPDATE,
    userId,
    accessToken,
    refreshToken,
  };
}

export function authTokensUpdate(accessToken, refreshToken) {
  return {
    type: AUTH_TOKENS_UPDATE,
    accessToken,
    refreshToken,
  };
}
