import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

var Footer = React.createClass({

  render: function() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ChartApp &copy; {new Date().getFullYear()}
        </Text>
      </View>
    )
  }
})

export default Footer
