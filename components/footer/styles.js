import React from 'react-native';
import colors from '../../utils/colors';

var { StyleSheet } = React;

var styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  footerText: {
    fontFamily: 'Verdana',
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  }
})

export default styles
