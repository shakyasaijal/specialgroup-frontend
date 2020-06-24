import JwtDecode from 'jwt-decode';

import { getState, dispatchFromStore } from 'services/ReduxService';

import { getAccessToken, getRefreshToken } from 'selectors/auth';

import { authInfoUpdate } from 'actions/auth';

import { refreshAccessToken } from 'api/auth';

export const accessToken = async () => {
  let state = getState();
  const accessToken = getAccessToken(state);

  if (!accessToken) return '';
  // JwtDecode() returns
  /*
    email: "test@gmail.com"
    expires: "2020-06-23 23:17:09.794487"
    scope: "access"
  */
  // We need expires here.
  const decoded = JwtDecode(accessToken);
  const expired = new Date(decoded.expires);

  // until expired time in minutes
  const untilExpired = (expired - Date.now()) / 1000 / 60;

  // if expiry time of current accessToken<1 and
  // refreshToken is still valid then refetch accessToken and update store
  if (untilExpired < 1) {
    const token = getRefreshToken(state);
    const res = await refreshAccessToken(token);
    const { userId, isVerified, accessToken, refreshToken } = await res.data;

    dispatchFromStore(authInfoUpdate(userId, isVerified, accessToken, refreshToken));
  }

  state = getState();

  return getAccessToken(state);
};
