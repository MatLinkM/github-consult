import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  buttonAdd: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonLogout: {
    fontSize: 30,
    color: colors.dark,
    fontWeight: 'bold'
  }
});

export default styles;
