import { getEndPoint } from 'config/Config';

import { httpService } from 'services/HttpServices';
import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const login = (email, password, csrfmiddlewaretoken) => {
  const path = `${getEndPoint()}/login/`;
  const payload = { email, password, csrfmiddlewaretoken };

  return httpService.request('post', null, path, null, payload);
};

export const getAccountInfo = (userId) => {
  const path = `/register/${userId}`;

  return specialGroupHttpService.get(path);
};
