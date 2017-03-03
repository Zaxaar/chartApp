import React from 'react';
import {
  View,
} from 'react-native';
import { StockLine } from 'react-native-pathjs-charts';

import colors from '../../../utils/colors';

let ChartTwo = React.createClass({

  render: function() {

    let data = [
      [{
        "x": 0,
        "y": 10
      }, {
        "x": 20,
        "y": 20
      }, {
        "x": 30,
        "y": 30
      }, {
        "x": 40,
        "y": 40
      }, {
        "x": 50,
        "y": 15
      }]
    ]

    let options = {
      width: 280,
      height: 280,
      color: colors.blue,
      margin: {
        top: 40,
        left: 20,
        bottom: 25,
        right: 20
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: false,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Verdana',
          fontSize: 10,
          fontWeight: true,
          fill: colors.darkBlue
        }
      },
      axisY: {
        showAxis: true,
        showLines: false,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Verdana',
          fontSize: 10,
          fontWeight: true,
          fill: colors.darkBlue
        }
      }
    }

    return (
      <View>
        <StockLine data={data} options={options} xKey='x' yKey='y' />
      </View>
    )
  }
})

export default ChartTwo
