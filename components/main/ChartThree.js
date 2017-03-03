import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

import Navigation from './Navigation'

var ChartThree = React.createClass({

  render: function() {
    return (
      <View style={styles.mainWrapper}>
        <Navigation navigator={this.props.navigator}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}> {this.props.title} </Text>
          <Text style={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
    )
  }
})

export default ChartThree
