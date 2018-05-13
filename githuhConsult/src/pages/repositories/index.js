import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import InputHeader from '../../components/inputHeader';
import ButtonAddRepo from '../../components/buttonAddRepo';
import styles from './style';
import 'config/reactotronConfig';

export default class Repositories extends Component {

  static navigationOptions = {
    headerStyle: {
      paddingLeft: 20,
      paddingVertical: 10
    },
    headerTitle: (
      <InputHeader />
    ),
    headerRight: (
      <ButtonAddRepo />
    ),
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}
