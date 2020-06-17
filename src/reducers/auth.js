import { AUTH_INFO_UPDATE } from 'actions/auth';

const defaultAuthState = {
  userId: '',
  isVerified: false,
  accessToken: '',
  refreshToken: '',
};

export const auth = (state = defaultAuthState, action) => {
  switch (action.type) {
    case AUTH_INFO_UPDATE: {
      const { userId, isVerified, accessToken, refreshToken } = action;

      return { ...state, userId, isVerified, accessToken, refreshToken };
    }
    default:
      return state;
  }
};
