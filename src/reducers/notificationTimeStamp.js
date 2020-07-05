import { NOTIFICATION_TIMESTAMP_UPDATE } from 'actions/notificationTimeStamp';

const defaultState = {};

export const notificationTS = (state = defaultState, action) => {
  switch (action.type) {
    case NOTIFICATION_TIMESTAMP_UPDATE: {
      const { field } = action;

      return { ...state, ...field };
    }
    default:
      return state;
  }
};
