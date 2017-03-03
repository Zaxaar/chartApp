import React from 'react';
import {
  View
} from 'react-native';
import { Bar } from 'react-native-pathjs-charts';

import colors from '../../../utils/colors';

let ChartThree = React.createClass({

  render: function() {
    let data = [
      [{
        "value": 7,
        "name": 'HTML'
      }, {
        "value": 6,
        "name": 'CSS'
      }, {
        "value": 4,
        "name": 'Java Script'
      }, {
        "value": 3,
        "name": 'React'
      }]
    ]

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 25,
        left: 20,
        bottom: 50,
        right: 20
      },
      color: colors.blue,
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Tahoma',
          fontSize: 10,
          fontWeight: true,
          fill: colors.darkBlue
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Verdana',
          fontSize: 8,
          fontWeight: true,
          fill: colors.darkBlue
        }
      }
    }
    return (
      <View>
        <Bar data={data} options={options} accessorKey='value'/>
      </View>
    )
  }
})

export default ChartThree
