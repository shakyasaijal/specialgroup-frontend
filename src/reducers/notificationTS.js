import { NOTIFICATION_TIMESTAMP_UPDATE } from 'actions/notificationTS';

export const notificationTS = (state = {}, action) => {
  switch (action.type) {
    case NOTIFICATION_TIMESTAMP_UPDATE: {
      const { notification } = action;

      return { ...state, ...notification };
    }
    default:
      return state;
  }
};
