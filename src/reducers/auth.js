import { AUTH_INFO_UPDATE } from 'actions/auth';

const defaultState = {
  userId: '',
  accessToken: '',
  refreshToken: '',
};

export const auth = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_INFO_UPDATE: {
      const { userId, accessToken, refreshToken } = action;

      return { ...state, userId, accessToken, refreshToken };
    }
    default:
      return state;
  }
};
