import React from 'react';
import { Provider } from 'react-redux';
import { Navigator } from 'react-native-deprecated-custom-components';

import {
  BackHandler,
  StyleSheet,
  View,
} from 'react-native';

import configureStore from './store/configure-store';
import NavigationBar from './navigation/navigation-bar';
import SceneContainer from './navigation/scene-container';
import Styles from './utils/styles';
import RouteMapper from './navigation/route-mapper';
import Routes from './navigation/routes';

// Store
const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.BODY_BG,
  },
  navbar: {
    backgroundColor: Styles.NAVBAR_BG,
  },
});

export default class AppContainer extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });
  }

  renderScene(route, navigator) {
    this.navigator = navigator;

    return (
      <SceneContainer
        title={route.title}
        route={route}
        navigator={navigator}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
        {...this.props}
      />
    );
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator
            initialRoute={Routes.home()}
            renderScene={(route, navigator) => this.renderScene(route, navigator)}
            navigationBar={
              <NavigationBar style={styles.navbar} routeMapper={RouteMapper} />
            }
          />
        </View>
      </Provider>
    );
  }
}
