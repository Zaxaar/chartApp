import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';

import Navigation from './Navigation';
import List from './list/List';

var SceneFour = React.createClass({

  render: function() {
    return (
      <View style={styles.mainWrapper}>
        <Navigation navigator={this.props.navigator}/>
        <View style={styles.mainContent}>
          <Text style={styles.title}> {this.props.title} </Text>
          <Text style={styles.paragraph}>
            Sample Gdańsk photos from wikipedia.
          </Text>
          <List list={this.props.list} />
        </View>
      </View>
    )
  }
})

export default SceneFour
