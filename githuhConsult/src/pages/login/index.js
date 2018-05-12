import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import styles from './style'
import 'config/reactotronConfig'

export default class App extends Component {

  state = {
    repoName: ''
  }

  render() {
    return (
      <View>
        <View>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(repoName) => this.setState({repoName})}
            value={this.state.repoName}
          />
        </View>
      </View>
    );
  }
}
