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
import SceneOne from './main/SceneOne';
import SceneTwo from './main/SceneTwo';
import SceneThree from './main/SceneThree';

var Root = React.createClass({

  renderScene: function(route, navigator) {
    if (route.name == 'SceneOne' ) {
      return <SceneOne navigator={navigator} title={'Chart One'}/>
    }
    if (route.name == 'SceneTwo') {
      return <SceneTwo navigator={navigator} title={'Chart Two'}/>
    }
    if (route.name== 'SceneThree') {
      return <SceneThree navigator={navigator} title={'Chart Three'}/>
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
          initialRoute={{name: 'SceneOne'}}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
        <Footer />
      </View>
    );
  },

});

export default Root
