import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import Home from '../View/Home';
import Login from '../View/Login';
import Weather from '../View/Weather';

const navigationOptions = {
  headerTitleStyle: { alignSelf: 'center' },
  headerTintColor: '#333',
  headerBackTitle: null,
};

const appNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      ...navigationOptions,
      title: 'Home',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      ...navigationOptions,
      title: 'Login',
      headerRight: <View />,
    },
  },
  Weather: {
    screen: Weather,
    navigationOptions: {
      ...navigationOptions,
      title: 'Weather',
      headerRight: <View />,
    },
  },
});

export { appNavigator as AppNavigator };
