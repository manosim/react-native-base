import React from 'react';
import { Provider } from 'react-redux';

import {
  BackAndroid,
  StyleSheet,
  Navigator,
  View,
} from 'react-native';

import configureStore from './Store/configureStore';
import NavigationBar from './Navigation/NavigationBar';
import SceneContainer from './Navigation/SceneContainer';
import Styles from './Utils/Styles';
import RouteMapper from './Navigation/RouteMapper';
import Routes from './Navigation/Routes';

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
    BackAndroid.addEventListener('hardwareBackPress', () => {
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
            initialRoute={Routes.dashboard()}
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
