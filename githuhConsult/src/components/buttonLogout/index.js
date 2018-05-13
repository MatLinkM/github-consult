import React, { Component } from 'react';

import {
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './styles';

const ButtonLogout = () => (
  <TouchableOpacity style={styles.buttonLogout} onPress={() => alert('This is a button!')}>
    <Text style={styles.textButtonLogout}>+</Text>
  </TouchableOpacity>
);

export default ButtonLogout;
