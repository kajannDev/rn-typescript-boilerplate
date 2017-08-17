import { AppNavigator } from '../Navigators';
import { INITIAL_ROUTE } from '../Actions/types';

const INITIAL_STATE = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_ROUTE:
      return { ...state, routes: [...action.payload] };
    default: {
      const nextState = AppNavigator.router.getStateForAction(action, state);
      return nextState || state;
    }
  }
};
