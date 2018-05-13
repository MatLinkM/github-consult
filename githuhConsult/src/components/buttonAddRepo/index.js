import React, { Component } from 'react';

import {
  TouchableOpacity,
  Text,
  AsyncStorage
} from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default class Repositories extends Component {

  getRepositories = async () => {
    const repositories = await api.get('repos/react-community/react-navigation');

    await AsyncStorage.setItem('@githubConsult:repos', repositories);
  }

  render() {
    return (
      <TouchableOpacity style={styles.buttonAdd} onPress={() => this.getRepositories()}>
        <Text style={styles.textButtonLogout}>+</Text>
      </TouchableOpacity>
    );
  }
}
