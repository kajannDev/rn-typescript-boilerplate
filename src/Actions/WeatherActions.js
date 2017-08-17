import { getRequest } from '../Utils/api';
import { WEATHER_UPDATE } from '../Actions/types';

const successToReducer = ({ dispatch, type, payload }) => {
  dispatch({ type, payload });
};

export const currentWeatherByCity = ({ city, state, appId }) => {
  const url = `http://samples.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${appId}`;
  getRequest({ url }).then(result => {
    const payload = result;
    successToReducer({ type: WEATHER_UPDATE, payload });
  });
};
