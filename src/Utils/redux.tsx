import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware('root', (state: IState) => state.nav);
const addListener = createReduxBoundAddListener('root');

export { middleware, addListener };

export interface IState {
  nav: Object;
}
