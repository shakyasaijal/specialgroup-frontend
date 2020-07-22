export const REFERRAL_LINK_REQUEST = 'REFERRAL_LINK_REQUEST';
export const REFERRAL_LINK_UPDATE = 'REFERRAL_LINK_UPDATE';

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
