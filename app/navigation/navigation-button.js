import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

import Routes from './routes';
import Styles from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolbarButton: {
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 32,
    color: '#FFF',
  },
});

export default class NavigationButton extends React.PureComponent {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  noDuplicatesPush(route) {
    const routes = this.props.navigator.getCurrentRoutes();
    if (routes[routes.length - 1].id !== route.id) {
      this.props.navigator.push(route);
    }
  }

  goToSettings() {
    this.noDuplicatesPush(Routes.home());
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.toolbarButton}
          underlayColor={Styles.NAVBAR_BG}
          onPress={() => this.goToSettings()}
        >
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
