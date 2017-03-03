import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

var Header = React.createClass({

  render: function() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}> ChartApp </Text>
      </View>
    )
  }
})

export default Header
