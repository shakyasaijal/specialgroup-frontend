import { REFERRAL_LINK_UPDATE, REFERRAL_CODE_UPDATE, REFERRAL_INFO_UPDATE } from 'actions/referral';

const defaultState = {};

export const referral = (state = defaultState, action) => {
  switch (action.type) {
    case REFERRAL_LINK_UPDATE: {
      const { referral } = action;

      return { ...state, ...referral };
    }
    default:
      return state;
  }
};

export const referralCode = (state = '', action) => {
  switch (action.type) {
    case REFERRAL_CODE_UPDATE: {
      const { referralCode } = action;

      return referralCode;
    }
    default:
      return state;
  }
};

export const referralInfo = (state = defaultState, action) => {
  switch (action.type) {
    case REFERRAL_INFO_UPDATE: {
      const { referralInfo } = action;

      return { ...state, ...referralInfo };
    }
    default:
      return state;
  }
};
