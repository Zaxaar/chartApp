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
        <TouchableOpacity onPress={()=>this.navigate('ChartOne')}>
          <Text style={this.addStyle('ChartOne')}> Chart I</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('ChartTwo')}>
          <Text style={this.addStyle('ChartTwo')}> Chart II</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.navigate('ChartThree')}>
          <Text style={this.addStyle('ChartThree')}> Chart III</Text>
        </TouchableOpacity>
      </View>
    )
  }

});

export default Navigation
