import { WEATHER_UPDATE } from '../Actions/types';

const INITIAL_STATE = {
  name: '',
  main: {
    humidity: '',
    pressure: '',
    temp: '',
    tempMax: '',
    tempMin: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEATHER_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
