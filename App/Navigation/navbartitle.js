import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default class NavigationTitle extends React.PureComponent {
  static propTypes = {
    route: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.route.title}</Text>
      </View>
    );
  }
}
