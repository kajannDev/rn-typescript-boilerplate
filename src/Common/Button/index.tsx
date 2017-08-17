import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style';

export class Button extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    const { children, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress()} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export interface IProps {
  onPress: Function;
  children: String;
}
export interface IState {}
