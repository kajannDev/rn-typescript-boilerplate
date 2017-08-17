import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../Common/Button';
import { styles } from './login.style';

export default class Login extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <View>
          <Button onPress={() => this.props.navigation.goBack(null)}>LOGIN</Button>
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
interface INavigation {
  goBack: Function;
}
