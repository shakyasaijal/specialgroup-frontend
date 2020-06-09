const defaultAuthState = {
  userId: null,
  accessToken: null,
  refreshToken: null,
};

export default function auth(state = defaultAuthState, action) {
  switch (action.type) {
    case 1: {
      return 1;
    }
    default:
      return state;
  }
}
