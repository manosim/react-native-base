import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Constants from '../Utils/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    marginVertical: 5,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default class Info extends React.Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Constants.APP_NAME}</Text>
        <Text style={styles.desc}>{Constants.APP_DESC}</Text>
      </View>
    );
  }
}
