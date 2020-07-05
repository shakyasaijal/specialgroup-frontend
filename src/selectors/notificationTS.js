export const getNotificationTS = (state) => state.notificationTS;

export const getCompleteLaterClickedAt = (state) => {
  const nts = getNotificationTS(state);

  if (!nts) return null;

  return nts.completeLaterClickedAt;
};

export const emailVerifyLaterClickedAt = (state) => {
  const nts = getNotificationTS(state);

  if (!nts) return null;

  return nts.emailVerifyLaterClickedAt;
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
