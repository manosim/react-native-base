import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import AppContainer from './app/app-container';
import configureStore from './app/store/configure-store';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PROJECT_NAME', () => App);
