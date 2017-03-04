import React from 'react';
import {
  View,
} from 'react-native';
import { Pie } from 'react-native-pathjs-charts';

import colors from '../../../utils/colors';

let ChartOne = React.createClass({

  render: function() {

    console.log(Pie);

    let data = [{
      "name": "Bootstrap",
      "stars": 77733
    }, {
      "name": "Angular.js",
      "stars": 35311
    }, {
      "name": "jQuery",
      "stars": 33394
    }, {
      "name": "Vue",
      "stars": 31473
    }]

    let options = {
      margin: {
        top: 5,
        left: 0,
        right: 0,
        bottom: 5
      },
      width: 350,
      height: 350,
      color: colors.blue,
      r: 50,
      R: 150,
      legendPosition: 'topCenter',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Verdana',
        fontSize: 12,
        fontWeight: true,
        color: colors.white
      }
    }
    return (
      <View>
        <Pie
          data={data}
          options={options}
          accessorKey="stars" />
      </View>
    )
  }
})

export default ChartOne
