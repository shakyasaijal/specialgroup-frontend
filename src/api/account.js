import { getEndPoint } from 'config/Config';

import { httpService } from 'services/HttpServices';

import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const getAccountInfo = (userId) => {
  const path = `/v1/api/register/${userId}`;

  return specialGroupHttpService.get(path);
};

export const resetPassword = (email) => {
  const path = `${getEndPoint()}/v1/api/reset-password/`;
  const payload = { email };

  return httpService.request('post', null, path, null, payload);
};

export const changeAccountInfo = (phone, address, firstName, lastName, location) => {
  const path = '/v1/api/update-info/';
  const payload = { phone, address, firstName, lastName, location };

  return specialGroupHttpService.post(path, payload);
};
