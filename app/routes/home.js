import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Styles from '../utils/styles';
import Constants from '../utils/constants';

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
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'red',
  }
});

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Constants.APP_NAME}</Text>
        <Text style={styles.desc}>{Constants.APP_DESC}</Text>

        <Button
          style={styles.button}
          title="More Information"
          color={Styles.BRAND_BLUE}
          onPress={() => this.props.navigation.navigate('Info')}
        />
      </View>
    );
  }
}
