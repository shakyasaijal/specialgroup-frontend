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

export const changePassword = (oldPassword, newPassword, confirmPassword) => {
  const path = '/v1/api/change-password/';
  const payload = { oldPassword, newPassword, confirmPassword };

  return specialGroupHttpService.post(path, payload);
};

export const updateAccountInfo = (phone, address, firstName, lastName, district) => {
  const path = '/v1/api/update-info/';
  let payload = {};

  if (phone) {
    payload = { ...payload, phone };
  }
  if (address) {
    payload = { ...payload, address };
  }
  if (firstName) {
    payload = { ...payload, firstName };
  }
  if (lastName) {
    payload = { ...payload, lastName };
  }
  if (district) {
    payload = { ...payload, district };
  }

  return specialGroupHttpService.post(path, payload);
};

export const completeProfile = (phone, address, district, referedBy, interests) => {
  const path = '/v1/api/complete-profile/';
  const payload = { phone, address, district, referedBy, interests };

  return specialGroupHttpService.post(path, payload);
};
