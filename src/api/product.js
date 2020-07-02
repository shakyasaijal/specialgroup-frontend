import { getEndPoint } from 'config/Config';

import { httpService } from 'services/HttpServices';
import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const getProductsWithoutAuth = () => {
  const path = `${getEndPoint()}/v1/api/landing-page/`;

  return httpService.request('get', null, path);
};

export const getProductWithAuth = () => {
  const path = '/v1/api/landing-page/';

  return specialGroupHttpService.get(path);
};
