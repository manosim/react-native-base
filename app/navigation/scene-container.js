import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

import Styles from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class SceneContainer extends React.Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    const { route, navigator } = this.props;
    const Component = route.component;
    const navbarStyle = { marginTop: (route.displayNavBar ? Styles.NAVBAR_HEIGHT : 0) };

    return (
      <View style={[styles.container, navbarStyle]}>
        <Component
          navigator={navigator}
          currentRoute={route}
          {...route.passProps}
        />
      </View>
    );
  }
}
