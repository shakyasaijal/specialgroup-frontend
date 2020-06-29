export const getAccount = (state) => state.account;

export const isProfileCompleted = (state) => {
  return isAddressDetailCompleted(state) && isHearUsDetailCompleted(state) && isInterestDetailCompleted(state);
};

export const isAddressDetailCompleted = (state) => {
  const account = getAccount(state);

  if (!account) return false;

  return !!account.phone && !!account.address && !!account.district && !!account.province;
};

export const isHearUsDetailCompleted = (state) => {
  const account = getAccount(state);

  if (!account) return false;

  return !!account.marketing;
};

export const isInterestDetailCompleted = (state) => {
  const account = getAccount(state);

  if (!account) return false;

  return !!account.interest && !!account.interest.length;
};
