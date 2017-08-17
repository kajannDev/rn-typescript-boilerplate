import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { currentWeatherByCity } from '../../Actions';
import { styles } from './weather.style';

class Weather extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {};
  }

  public componentWillMount(): void {
    const city = 'London';
    const state = 'uk';
    const appId = 'b6907d289e10d714a6e88b30761fae22';
    this.props.currentWeatherByCity({ city, state, appId });
  }

  public render(): JSX.Element {
    const { currentWeather } = this.props;
    if (currentWeather) {
      const { name, main } = currentWeather;
      const { humidity, pressure, temp, tempMax, tempMin } = main;
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <View>
            <Text style={styles.text}>Humidity: {humidity}</Text>
            <Text style={styles.text}>Pressure: {pressure}</Text>
            <Text style={styles.text}>Temp: {temp}</Text>
            <Text style={styles.text}>
              Min - max: {tempMin} - {tempMax}
            </Text>
          </View>
          <Text />
        </View>
      );
    }
    return null;
  }
}

const mapSateToProps = ({ currentWeather }: IProps) => ({ currentWeather });

export default connect(mapSateToProps, {
  currentWeatherByCity,
})(Weather);

export interface IState {}
export interface IProps {
  currentWeather: ICurrentWeather;
  currentWeatherByCity: Function;
}
export interface ICurrentWeather {
  name: String;
  main: IWeatherMain;
}
export interface IWeatherMain {
  humidity: Number;
  pressure: Number;
  temp: Number;
  tempMax: Number;
  tempMin: Number;
}
