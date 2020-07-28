import {
  LOCATION_MAP_UPDATE,
  MARKETING_PLATFORM_UPDATE,
  POPULAR_CATEGORY_UPDATE,
  FAQ_UPDATE,
  ORDER_HELP_UPDATE,
} from 'actions/publicAction';

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

export const orderHelp = (state = defaultState, action) => {
  switch (action.type) {
    case ORDER_HELP_UPDATE: {
      const { orderHelp } = action;

      return [...state, ...orderHelp];
    }
    default:
      return state;
  }
};

export const faq = (state = defaultState, action) => {
  switch (action.type) {
    case FAQ_UPDATE: {
      const { faq } = action;

      return [...state, ...faq];
    }
    default:
      return state;
  }
};
