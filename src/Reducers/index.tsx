import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WeatherReducer from './WeatherReducer';
import NavigatorReducer from './NavigatorReducer';

export default combineReducers({
  user: UserReducer,
  currentWeather: WeatherReducer,
  nav: NavigatorReducer,
});
