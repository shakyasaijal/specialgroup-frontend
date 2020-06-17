import { getEndPoint } from 'config/Config';

import { httpService } from 'services/HttpServices';
import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const signUp = (firstName, lastName, email, password) => {
  const path = `${getEndPoint()}/v1/api/register/`;
  const payload = { firstName, lastName, email, password };

  return httpService.request('post', null, path, null, payload);
};

export const getAccountInfo = (userId) => {
  const path = `/v1/api/register/${userId}`;

  return specialGroupHttpService.get(path);
};

export const login = (email, password) => {
  const path = `${getEndPoint()}/v1/api/login/`;
  const payload = { email, password };

  return httpService.request('post', null, path, null, payload);
};

export const googleLogin = (idToken) => {
  const path = `${getEndPoint()}/v1/api/google-login/`;
  const payload = { idToken };

  return httpService.request('post', null, path, null, payload);
};

export const facebookLogin = (idToken) => {
  const path = `${getEndPoint()}/v1/api/facebook-login/`;
  const payload = { idToken };

  return httpService.request('post', null, path, null, payload);
};
