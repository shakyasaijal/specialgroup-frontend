export const getReferral = (state) => {
  if (state.referral) return state.referral;

  return null;
};

export const getReferralCode = (state) => {
  if (state.referralCode) return state.referralCode;

  return '';
};
