import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

import Navigation from './Navigation';
import ChartThree from './charts/ChartThree';

var SceneThree = React.createClass({

  render: function() {
    return (
      <View style={styles.mainWrapper}>
        <Navigation navigator={this.props.navigator}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}> {this.props.title} </Text>
          <Text style={styles.paragraph}>
            Simple bar chart with sample values.
          </Text>
          <ChartThree />
        </View>
      </View>
    )
  }
})

export default SceneThree
