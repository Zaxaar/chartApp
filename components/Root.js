import React from 'react';
import {
  Navigator,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import styles from './styles'

import Header from './header/Header';
import Footer from './footer/Footer';
import ChartOne from './main/ChartOne';
import ChartTwo from './main/ChartTwo';
import ChartThree from './main/ChartThree';

var Root = React.createClass({

  renderScene: function(route, navigator) {
    if (route.name == 'ChartOne' ) {
      return <ChartOne navigator={navigator}
       title={'Chart One'}/>
    }
    if (route.name == 'ChartTwo') {
      return <ChartTwo navigator={navigator} title={'Chart Two'}/>
    }
    if (route.name== 'ChartThree') {
      return <ChartThree navigator={navigator} title={'Chart Three'}/>
    }
  },

  configureScene: function(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromLeft;
  },

  render: function() {

    return (
      <View style={[styles.body]}>
        <Header />
        <Navigator
          initialRoute={{name: 'ChartOne'}}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
        <Footer />
      </View>
    );
  },

});

export default Root
