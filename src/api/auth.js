import { httpService } from 'services/HttpServices';
import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const signUp = (firstName, lastName, email, password, code = '') => {
  const path = '/v1/api/register/';
  let payload = { firstName, lastName, email, password };

  if (code) {
    payload = { ...payload, code };
  }

  return httpService.request('post', path, payload);
};

export const login = (email, password) => {
  const path = '/v1/api/login/';
  const payload = { email, password };

  return httpService.request('post', path, payload);
};

export const googleLogin = (idToken, code = '') => {
  const path = '/v1/api/google-login/';
  let payload = { idToken };

  if (code) {
    payload = { ...payload, code };
  }

  return httpService.request('post', path, payload);
};

export const facebookLogin = (idToken, code) => {
  const path = '/v1/api/facebook-login/';
  let payload = { idToken };

  if (code) {
    payload = { ...payload, code };
  }

  return httpService.request('post', path, payload);
};

export const logout = (accessToken, refreshToken) => {
  const path = '/v1/api/logout/';
  const payload = { accessToken, refreshToken };

  return httpService.request('post', path, payload);
};

export const resendVerificationEmail = (email) => {
  const path = '/v1/api/resend-email/';
  const payload = { email };

  return specialGroupHttpService.post(path, payload);
};

export const refreshAccessToken = (refreshToken) => {
  const path = '/v1/api/refresh/token/';
  const payload = { refreshToken };

  return httpService.request('post', path, payload);
};
