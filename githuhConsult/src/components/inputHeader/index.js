import React, { Component } from 'react';

import { TextInput } from 'react-native';

import styles from './styles';

const InputHeader = () => (
  <TextInput
    style={styles.input}
    placeholder='Adicionar repositorio'
    autoCapitalize='none'
    autoCorrect={false}
    underlineColorAndroid='rgba(0, 0, 0, 0)'
  />
)

export default InputHeader;
