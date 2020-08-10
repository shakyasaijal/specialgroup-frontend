import specialGroupHttpService from 'services/SpecialGroupHttpService';
import { httpService } from 'services/HttpServices';

export const getLocationMap = () => {
  const path = `/v1/api/location/`;

  return specialGroupHttpService.get(path);
};

export const getMarketingPlatforms = () => {
  const path = `/v1/api/marketing/`;

  return specialGroupHttpService.get(path);
};

export const getPopularCategories = () => {
  const path = `/v1/api/interest/`;

  return specialGroupHttpService.get(path);
};

export const getOrderHelp = () => {
  const path = '/v1/api/order-help/';

  return httpService.request('get', path);
};

export const getFaq = () => {
  const path = '/v1/api/faq/';

  return httpService.request('get', path);
};
