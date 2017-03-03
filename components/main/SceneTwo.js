import React from 'react';
import {
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import styles from './styles';

import Navigation from './Navigation';
import ChartTwo from './charts/ChartTwo';

var SceneTwo = React.createClass({

  render: function() {
    return (
      <View style={styles.mainWrapper}>
        <Navigation navigator={this.props.navigator}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}> {this.props.title} </Text>
          <Text style={styles.paragraph}>
            Simple line chart with sample data.
          </Text>
          <ChartTwo />
        </View>
      </View>
    )
  }
})

export default SceneTwo
