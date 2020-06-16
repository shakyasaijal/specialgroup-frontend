import { AUTH_INFO_UPDATE } from 'actions/auth';

const defaultState = {
  userId: '',
  isVerified: false,
  accessToken: '',
  refreshToken: '',
};

export const auth = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_INFO_UPDATE: {
      const { userId, isVerified, accessToken, refreshToken } = action;

      return { ...state, userId, isVerified, accessToken, refreshToken };
    }
    default:
      return state;
  }
};
