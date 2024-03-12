import * as React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles from './GeraGraficoBarStyles';
//import LinearGradient from 'react-native-linear-gradient';
import HSBar from 'react-horizontal-stacked-bar-chart';

import { LineChart, StackedBarChart, BarChart, Grid } from 'react-native-svg-charts'
import { number } from 'prop-types';
//import { AreaChart, Grid } from 'react-native-svg-charts'

export namespace GeraGraficoBar {
  export interface Props {

    // dada: [{
    //   // key: number,
    //   amount: any;
    //   nome: any;
    //   key: any;
    //   cor: any;
    // }]
    dada:any
  }

  // tslint:disable-next-line:no-empty-interface
  export interface State { }
}

export default class GeraGraficoBar extends React.Component<GeraGraficoBar.Props, GeraGraficoBar.State> {

  constructor(props: GeraGraficoBar.Props) {
    super(props);
  }

 
  render() {
    //   const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    return (

      <View style={{ width: 250 }}>

        {/* <BarChart
          style={{ height: 100 }}
        
          data={this.props.dada}
          horizontal={true}
          svg={{ fill: 'green' }}
          contentInset={{ top: 20, bottom: 20 }}
 
        >
       
        </BarChart> */}

        {this.props.dada.map((dado, i) =>

          <View>
            <Text  style={{ fontSize: 18, color: 'white', fontWeight:'bold', marginBottom:10 }}>  {dado.nome}: {dado.amount}</Text>
            <View style={{ height: 40, width: dado.amount, backgroundColor: dado.cor, marginBottom: 10, marginLeft: 10 }}>

            </View>

          </View>
        )}
      </View>
    );
  }
}

