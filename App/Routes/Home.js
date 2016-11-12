import React from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Styles from '../Utils/Styles';
import Constants from '../Utils/Constants';
import Routes from '../Navigation/Routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  desc: {
    marginVertical: 5,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default class Home extends React.Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Constants.APP_NAME}</Text>
        <Text style={styles.desc}>{Constants.APP_DESC}</Text>

        <Button
          text="About"
          color="#841584"
          onPress={() => this.props.navigator.push(Routes.about())}
          isFilled />
      </View>
    );
  }
}
