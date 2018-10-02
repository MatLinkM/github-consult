import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '../../styles';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.darkgray,
  },
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
