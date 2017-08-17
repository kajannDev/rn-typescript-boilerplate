import React, { PureComponent } from 'react';
import { Alert, StatusBar, Platform } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';
import { Provider } from 'react-redux';
import AppWithNavigationState from './AppWithNavigationState';
import { INITIAL_ROUTE } from './Actions/types';
import { store } from './Store';

class App extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {
      page: null,
    };
  }

  public componentDidMount(): void {
    StatusBar.setHidden(false);
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    setJSExceptionHandler((error: IError, isFatal: Boolean) => {
      if (isFatal) {
        Alert.alert(
          'Something went wrong',
          `Error name: ${error.name}
          Error message: ${error.message}
          We will need to restart the app.`,
          [
            {
              text: 'Restart',
              onPress: () => RNRestart.Restart(),
              style: 'cancel',
            },
          ],
        );
      }
    }, true);
    // Temporary for initial page
    store.dispatch({
      type: INITIAL_ROUTE,
      payload: [
        {
          routeName: 'Home',
          key: 'Home',
        },
      ],
    });
    this.setState({ page: 'Home' });
  }

  public render(): JSX.Element {
    const { page } = this.state;
    if (page) {
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
    return null;
  }
}

export default App;

export interface IProps {}
export interface IState {
  page: String;
}
export interface IError {
  name: String;
  message: String;
}
