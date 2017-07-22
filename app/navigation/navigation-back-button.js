import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

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
    fontSize: Styles.NAVBAR_BUTTON_ICON_SIZE,
    color: '#FFF'
  }
});

export default class NavigationBackButton extends React.PureComponent {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.toolbarButton}
          underlayColor={Styles.NAVBAR_BG}
          onPress={() => this.goBack()}
        >
          <Icon name="chevron-left" style={styles.icon} />
        </TouchableHighlight>
      </View>
    );
  }
}
