import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './spinner.style';

export class Spinner extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {};
  }

  render() {
    const { size, color } = this.props;
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator color={color} size={size || 'large'} />
      </View>
    );
  }
}

export interface IProps {
  size: number;
  color: string;
}
export interface IState {}
