export const getAuth = (state) => state.auth;

export const getAccessToken = (state) => {
  const auth = getAuth(state);

  if (!auth) return '';

  return auth.accessToken;
};

export const getRefreshToken = (state) => {
  const auth = getAuth(state);

  if (!auth) return '';

  return auth.refreshToken;
};

export const isLoggedIn = (state) => {
  const auth = getAuth(state);

  if (!auth) return false;

  return !!auth.userId && !!auth.accessToken;
};

export const isAccountVerified = (state) => {
  const auth = getAuth(state);

  if (!auth) return false;

  return auth.isVerified;
};

export const getAccountInfo = (state) => {
  const account = state.account;

  if (!account) return '';

  return account;
};
