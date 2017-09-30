import React from 'react'; // eslint-disable-line no-unused-vars
import { View } from 'react-native';

class AppNavigator extends React.Component {
  render() {
    return <View>AppNavigator</View>;
  }
}

AppNavigator.router = {
  getStateForAction: jest.fn(() => ({})),
  getActionForPathAndParams: jest.fn(() => ({})),
};

export const StackNavigator = () => {
  return AppNavigator;
};

const createAction = (type: string) => (payload: Object = {}) => ({
  type,
  ...payload,
});

export const NavigationActions = {
  navigate: createAction('NAVIGATE'),
  reset: createAction('RESET'),
  NAVIGATE: 'NAVIGATE',
  BACK: 'BACK',
  RESET: 'RESET',
};

export const addNavigationHelpers = () => {
  return 'addNavigationHelpers';
};

export const Header = () => {
  return 'Header';
};
