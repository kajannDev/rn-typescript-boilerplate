import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { middleware } from '../Utils/redux';
import reducers from '../Reducers';

export const store = createStore(reducers, applyMiddleware(middleware, ReduxThunk));
