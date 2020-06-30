import specialGroupHttpService from 'services/SpecialGroupHttpService';

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
