import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../Common/Button/';
import { styles } from './home.styles';

export default class Home extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Boilerplate</Text>
        <View>
          <Button onPress={() => navigate('Weather')}>WEATHER</Button>
          <Button onPress={() => navigate('Login')}>LOGIN</Button>
        </View>
        <Text />
      </View>
    );
  }
}

export interface IState {}
export interface IProps {
  navigation: INavigation;
}

export interface INavigation {
  navigate: Function;
}
