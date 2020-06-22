import specialGroupHttpService from 'services/SpecialGroupHttpService';

export const getLocationMap = () => {
  const path = `/v1/api/location/`;

  return specialGroupHttpService.get(path);
};
