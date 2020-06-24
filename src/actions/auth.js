export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';

export const AUTH_CLEAR_STORE = 'AUTH_CLEAR_STORE';
export const AUTH_RESET_STORE = 'AUTH_RESET_STORE';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_GOOGLE_REQUEST = 'AUTH_GOOGLE_REQUEST';
export const AUTH_FACEBOOK_REQUEST = 'AUTH_FACEBOOK_REQUEST';
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';

export const AUTH_INFO_UPDATE = 'AUTH_INFO_UPDATE';
export const AUTH_TOKENS_UPDATE = 'AUTH_TOKENS_UPDATE';

export const RESEND_VERIFICATION_EMAIL_REQUEST = 'RESEND_VERIFICATION_EMAIL_REQUEST';

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

export function authRegisterRequest(
  firstName,
  lastName,
  email,
  password,
  callbackSuccess = null,
  callbackError = null
) {
  return {
    type: AUTH_REGISTER_REQUEST,
    firstName,
    lastName,
    email,
    password,
    callbackSuccess,
    callbackError,
  };
}

export function authLoginRequest(email, password, callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_LOGIN_REQUEST,
    email,
    password,
    callbackSuccess,
    callbackError,
  };
}

export function authGoogleRequest(idToken, callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_GOOGLE_REQUEST,
    idToken,
    callbackSuccess,
    callbackError,
  };
}

export function authFacebookRequest(facebookToken, callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_FACEBOOK_REQUEST,
    facebookToken,
    callbackSuccess,
    callbackError,
  };
}

export function authInfoUpdate(userId, isVerified, accessToken, refreshToken) {
  return {
    type: AUTH_INFO_UPDATE,
    userId,
    isVerified,
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

export function authLogoutRequest(accessToken, refreshToken, callbackSuccess = null, callbackError = null) {
  return {
    type: AUTH_LOGOUT_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function resendVerificationEmailRequest(email, callbackSuccess = null, callbackError = null) {
  return {
    type: RESEND_VERIFICATION_EMAIL_REQUEST,
    email,
    callbackSuccess,
    callbackError,
  };
}
