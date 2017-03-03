import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles'

var Navigation = React.createClass({

  navigate: function(routeName) {
    return this.props.navigator.push({
      name: routeName
    })
  },

  addStyle: function(routeName){
    let routeStack = this.props.navigator.state.routeStack;
    let currentRouteIndex = routeStack.length-1;

    return (
      routeStack[currentRouteIndex].name == routeName
      ? styles.navigationItemActive : styles.navigationItem
    )
  },

  render: function() {
    return (
      <View style={styles.navigation}>
        <TouchableOpacity onPress={()=>this.navigate('SceneOne')}>
          <Text style={this.addStyle('SceneOne')}> Chart I</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('SceneTwo')}>
          <Text style={this.addStyle('SceneTwo')}> Chart II</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('SceneThree')}>
          <Text style={this.addStyle('SceneThree')}> Chart III</Text>
        </TouchableOpacity>
      </View>
    )
  }

});

export default Navigation
