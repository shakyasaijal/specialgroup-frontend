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
