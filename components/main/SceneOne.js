import React from 'react';
import {
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import styles from './styles';

import Navigation from './Navigation';
import ChartOne from './charts/ChartOne';

var SceneOne = React.createClass({

  render: function() {
    return (
      <View style={styles.mainWrapper}>
        <Navigation navigator={this.props.navigator}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}>  {this.props.title} </Text>
          <Text style={styles.paragraph}>
            Popular GitHub repositories.
          </Text>
          <ChartOne />
        </View>
      </View>
    )
  }
})

export default SceneOne
