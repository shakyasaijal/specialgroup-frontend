import { AUTH_INFO_UPDATE, ACCOUNT_INFO_UPDATE } from 'actions/auth';

const defaultAuthState = {
  userId: '',
  isVerified: false,
  accessToken: '',
  refreshToken: '',
};

const defaultAccountState = {
  firstName: '',
  lastName: '',
  email: '',
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

export const account = (state = defaultAccountState, action) => {
  switch (action.type) {
    case ACCOUNT_INFO_UPDATE: {
      const { account } = action;

      return { ...state, ...account };
    }
    default:
      return state;
  }
};
