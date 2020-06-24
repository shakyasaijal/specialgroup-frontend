import { LOCATION_MAP_UPDATE } from 'actions/publicAction';

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
