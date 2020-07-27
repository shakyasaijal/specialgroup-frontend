export const getReferral = (state) => {
  if (state.referral) return state.referral;

  return null;
};

export const getReferralCode = (state) => {
  if (state.referralCode) return state.referralCode;

  return '';
};

export const getReferralInfo = (state) => {
  if (state.referralInfo) return state.referralInfo;

  return {};
};
