import React from 'react-native';
import colors from '../../../utils/colors'

var { StyleSheet } = React;

var styles = StyleSheet.create({
  listWrapper: {
    marginTop: 10
  },
  itemWrapper: {
    marginBottom: 5,
    padding: 10
  },
  listItemImage: {
    width: 300,
    height: 200
  },
  listItemTitle: {
    fontSize: 12,
    marginTop: 10,
    color: colors.darkBlue,
    textAlign: 'center'
  }

})

export default styles
