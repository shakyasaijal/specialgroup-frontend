import { getEndPoint } from 'config/Config';

import { httpService } from 'services/HttpServices';
import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const login = (email, password) => {
  const path = `${getEndPoint()}/v1/api/login/`;
  const payload = { email, password };

  return httpService.request('post', null, path, null, payload);
};

export const getAccountInfo = (userId) => {
  const path = `/v1/api/register/${userId}`;

  return specialGroupHttpService.get(path);
};
