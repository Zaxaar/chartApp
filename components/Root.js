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
import SceneFour from './main/SceneFour';


var Root = React.createClass({

  getInitialState: function() {
    return {
      listItems: []
    }
  },

  componentWillMount:  function(){
      fetch('https://monuments-data.herokuapp.com/api/monuments')
      .then((response) => response.json())
      .then((data) => (this.setState({listItems: data}) ));
  },


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
    if (route.name== 'SceneFour') {
      return <SceneFour navigator={navigator} title={'Image List'} list={this.state.listItems}/>
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
          initialRoute={{name: 'SceneFour'}}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
        <Footer />
      </View>
    );
  },

});

export default Root
