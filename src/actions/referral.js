export const REFERRAL_LINK_REQUEST = 'REFERRAL_LINK_REQUEST';
export const REFERRAL_LINK_UPDATE = 'REFERRAL_LINK_UPDATE';

export const REFERRAL_INFO_REQUEST = 'REFERRAL_INFO_REQUEST';
export const REFERRAL_INFO_UPDATE = 'REFERRAL_INFO_UPDATE';

export const HANDLE_CLICK_REQUEST = 'HANDLE_CLICK_REQUEST';

export const REFERRAL_CODE_UPDATE = 'REFERRAL_CODE_UPDATE';

export function referralLinkRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: REFERRAL_LINK_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function referralLinkUpdate(referral) {
  return {
    type: REFERRAL_LINK_UPDATE,
    referral,
  };
}

export function referralInfoRequest(callbackSuccess = null, callbackError = null) {
  return {
    type: REFERRAL_INFO_REQUEST,
    callbackSuccess,
    callbackError,
  };
}

export function referralInfoUpdate(referralInfo) {
  return {
    type: REFERRAL_INFO_UPDATE,
    referralInfo,
  };
}

export function handleClickRequest(code, callbackSuccess = null, callbackError = null) {
  return {
    type: HANDLE_CLICK_REQUEST,
    code,
    callbackSuccess,
    callbackError,
  };
}

export function referralCodeUpdate(referralCode) {
  return {
    type: REFERRAL_CODE_UPDATE,
    referralCode,
  };
}
