import React from 'react'; // eslint-disable-line no-unused-vars

import Styles from '../utils/styles';

import Home from '../routes/home';
import Info from '../routes/info';

export const navigationOptions = {
  headerBackTitle: null,
  headerTitleStyle: {
    fontSize: 16,
    color: Styles.NARBAR_TEXT_COLOR,
  },
  headerStyle: {
    backgroundColor: Styles.NARBAR_BG_COLOR,
  },
  headerBackTitleStyle: {
    color: Styles.NARBAR_TEXT_COLOR,
  },
  headerTintColor: Styles.NARBAR_TEXT_COLOR,
};

export default {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Info: {
    screen: Info,
    navigationOptions: {
      title: 'Information'
    },
  },
};
