import React from 'react-native';
import colors from '../../utils/colors';

var { StyleSheet } = React;

var styles = StyleSheet.create({
  header: {
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  headerText: {
    fontFamily: 'Verdana',
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  }
})

export default styles
