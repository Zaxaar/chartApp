import React from 'react-native';
import colors from '../../utils/colors'

var { StyleSheet } = React;

var styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  navigationItem: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
    },
  navigationItemActive: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.darkBlue,
  },
  mainContent: {
    flex: 8,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Verdana',
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
    color: colors.darkBlue,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.darkBlue,
    textAlign: 'center'
  }

})

export default styles
