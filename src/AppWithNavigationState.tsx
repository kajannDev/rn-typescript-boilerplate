import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BackHandler, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { AppNavigator } from './Navigators';
import { addListener } from './Utils/redux';

class AppWithNavigationState extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    // @ts-ignore
    super(props);
    this.state = {
      back: null,
    };
  }

  public componentDidMount(): void {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => {
        const { dispatch } = this.props;
        const { routes, index } = this.props.nav;
        if (index !== 0) {
          if (routes[index] === 'eventDetails') {
            this.props.resetEvent({ back: true });
          } else {
            dispatch(NavigationActions.back());
          }
          return true;
        }
        if (moment().diff(moment(this.state.back)) / 1000 < 0.5) {
          this.setState({ back: null });
          BackHandler.exitApp();
          return false;
        } else {
          this.setState({ back: moment() });
        }
        return true;
      });
    }
  }

  public componentWillUnmount(): void {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', () => console.log('Removed'));
    }
  }

  public render(): JSX.Element {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = ({ nav }) => ({
  nav,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);

export interface INav {
  routes: Array<Object>;
  index: number;
}
export interface IState {
  back: number | null;
}
export interface IProps {
  resetEvent: Function;
  dispatch: Function;
  actions: Object;
  nav: INav;
}
