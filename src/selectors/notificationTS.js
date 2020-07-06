import { getAuth } from './auth';

export const getNotificationTS = (state) => state.notificationTS;

export const getCompleteLaterClickedAt = (state) => {
  const auth = getAuth(state);
  const userId = auth.userId;
  const completeLaterClickedAt = localStorage.getItem('completeLaterClickedAt' + userId) || null;

  return completeLaterClickedAt;
};

export const emailVerifyLaterClickedAt = (state) => {
  const auth = getAuth(state);
  const userId = auth.userId;
  const emailVerifyLaterClickedAt = localStorage.getItem('emailVerifyLaterClickedAt' + userId) || null;

  return emailVerifyLaterClickedAt;
};

export const completeLaterClickedBefore1Day = (state) => {
  const t1 = getCompleteLaterClickedAt(state);

  // In case user login
  if (!t1) return true;

  const t2 = new Date().getTime();
  const diff = t1 > t2 ? t1 - t2 : t2 - t1;

  return Math.floor(diff / 1000 / 60 / 60 / 24) >= 1;
};

export const emailVerifyLaterClickedBefore1Day = (state) => {
  const t1 = emailVerifyLaterClickedAt(state);

  // In case user first login
  if (!t1) return true;

  const t2 = new Date().getTime();
  const diff = t1 > t2 ? t1 - t2 : t2 - t1;

  return Math.floor(diff / 1000 / 60 / 60 / 24) >= 1;
};
