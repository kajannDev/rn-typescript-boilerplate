import { USER_SAVE } from '../Actions/types';

const INITIAL_STATE = {
  id: null,
  first_name: '',
  last_name: '',
  email: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SAVE:
      return { ...state };
    default:
      return state;
  }
};
