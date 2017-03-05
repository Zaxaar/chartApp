import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';

let List = React.createClass({

  render: function() {
    return (
      <ScrollView style={styles.listWrapper}>
        {this.props.list.map(item =>
          <View key={item.id} style={styles.itemWrapper} >

          <Image
          style={styles.listItemImage}
          source={{uri: item.imageUrl }}
          />

          <Text style={styles.listItemTitle} > {item.name} </Text>
          </View>
        )}
      </ScrollView>
    )
  }

});

export default List
