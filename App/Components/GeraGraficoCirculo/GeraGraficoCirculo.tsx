import * as React from 'react';
import { Image, TouchableOpacity,  View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles from './GeraGraficoCirculoStyles';
//import LinearGradient from 'react-native-linear-gradient';
import HSBar from 'react-horizontal-stacked-bar-chart';
import { Text } from 'react-native-svg'

import { LineChart, StackedBarChart, BarChart, PieChart, Grid } from 'react-native-svg-charts'
import { number } from 'prop-types';
//import { AreaChart, Grid } from 'react-native-svg-charts'

export namespace GeraGraficoCirculo {
  export interface Props {

    dada: object[];
  }

  // tslint:disable-next-line:no-empty-interface
  export interface State { }
}

export default class GeraGraficoCirculo extends React.Component<GeraGraficoCirculo.Props, GeraGraficoCirculo.State> {
  constructor(props: GeraGraficoCirculo.Props) {
    super(props);
  }

  render() {



    return (

      <View style={{ width: '100%' }}>

        {/* <BarChart
          style={{ height: 200 }}
          data={this.props.dada}
          horizontal={true}
          svg={{ fill: 'green' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </BarChart> */}
        <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={this.props.dada}
          spacing={0}
          outerRadius={'95%'}
        >
   
        </PieChart>
      </View>

    );
  }
}

