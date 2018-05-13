import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: colors.darkgray,
    borderRadius: metrics.baseRadius,
    paddingLeft: 10
  }
});

export default styles;
