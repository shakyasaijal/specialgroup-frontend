import { ACCOUNT_INFO_UPDATE } from 'actions/account';

const defaultAccountState = {
  firstName: '',
  lastName: '',
  email: '',
};

export const account = (state = defaultAccountState, action) => {
  switch (action.type) {
    case ACCOUNT_INFO_UPDATE: {
      const { account } = action;

      return { ...state, ...account };
    }
    default:
      return state;
  }
};
