import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles'

var Navigation = React.createClass({

  currentRoute: function(){
    let routeStack = this.props.navigator.state.routeStack;
    let currentRouteIndex = routeStack.length-1;

    return routeStack[currentRouteIndex]
  },

  navigate: function(routeName) {
    if( this.currentRoute().name !== routeName ){
      return this.props.navigator.push({
        name: routeName
      })
    }
  },

  addStyle: function(routeName){
    return (
      this.currentRoute().name == routeName
      ? styles.navigationItemActive : styles.navigationItem
    )
  },

  render: function() {
    return (
      <View style={styles.navigation}>
        <TouchableOpacity onPress={()=>this.navigate('SceneOne')}>
          <Text style={this.addStyle('SceneOne')}> Scene I</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('SceneTwo')}>
          <Text style={this.addStyle('SceneTwo')}> Scene II</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('SceneThree')}>
          <Text style={this.addStyle('SceneThree')}> Scene III</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('SceneFour')}>
          <Text style={this.addStyle('SceneFour')}> Scene IV</Text>
        </TouchableOpacity>
      </View>
    )
  }

});

export default Navigation
