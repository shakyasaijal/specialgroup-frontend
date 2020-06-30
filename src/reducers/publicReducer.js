import { LOCATION_MAP_UPDATE, MARKETING_PLATFORM_UPDATE, POPULAR_CATEGORY_UPDATE } from 'actions/publicAction';

const defaultState = [];

export const locationMap = (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION_MAP_UPDATE: {
      const { locationMap } = action;

      return [...state, ...locationMap];
    }
    default:
      return state;
  }
};

export const marketingPlatforms = (state = defaultState, action) => {
  switch (action.type) {
    case MARKETING_PLATFORM_UPDATE: {
      const { marketingPlatforms } = action;

      return [...marketingPlatforms];
    }
    default:
      return state;
  }
};

export const popularCategories = (state = defaultState, action) => {
  switch (action.type) {
    case POPULAR_CATEGORY_UPDATE: {
      const { popularCategories } = action;

      return [...popularCategories];
    }
    default:
      return state;
  }
};
