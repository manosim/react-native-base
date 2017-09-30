import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator,
} from 'react-navigation';

import RoutesConfig, { navigationOptions } from './navigation/routes-config';
import Styles from './utils/styles'

export const AppNavigator = StackNavigator(RoutesConfig, {
  navigationOptions,
  cardStyle: {
    backgroundColor: Styles.BODY_BG,
  },
});

export class AppContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress() {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    dispatch({ type: NavigationActions.BACK });
    return true;
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

export function mapStateToProps(state) {
  return {
    nav: state.navigation,
  };
}

export default connect(mapStateToProps)(AppContainer);
