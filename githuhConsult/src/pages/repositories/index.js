import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import InputHeader from '../../components/inputHeader';
import styles from './style';
import api from '../../services/api';
import 'config/reactotronConfig';

export default class Repositories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ saveRepository: this.getRepositories });
  }

  getRepositories = async () => {
    const repo = await api.get('repos/MatLinkM/github-consult');

    console.warn(repo.data.name);
    this.setState({repos: repo.data});
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      paddingLeft: 20,
      paddingVertical: 10
    },
    headerTitle: (
      <InputHeader />
    ),
    headerRight: (
      <TouchableOpacity style={styles.buttonAdd} onPress={navigation.state.params ? navigation.state.params.saveRepository : null}>
        <Text style={styles.textButtonLogout}>+</Text>
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View>
        {this.state.repos}
      </View>
    );
  }
}
