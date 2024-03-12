//import * as React from 'react';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';


import { NavigationScreenProp, ScrollView } from 'react-navigation';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './StartPageAllButtonsStyles';
import GeraGraficoBar from '../../Components/GeraGraficoBar/GeraGraficoBar';
import GeraGraficoCirculo from '../../Components/GeraGraficoCirculo/GeraGraficoCirculo';
import { number } from 'prop-types';
//import styles from './NewPageCStyles';
interface Props {
  navigation: any

}

export default class NewPageC extends React.Component<Props>{

  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -50]
   
    const data1 = [
      {
          key: 1,
          amount: 50,
          svg: { fill: '#600080' },
         nome:'Renda',
         cor:'green'
      },
      {
          key: 2,
          amount: 50,
          svg: { fill: '#9900cc' },
         nome:'Despesa',
         cor:'red'
      }
      // },
      // {
      //     key: 3,
      //     amount: 40,
      //    svg: { fill: '#c61aff' },
      //    nome:'Empresa',
      //    cor:'grey'
      // },
      // {
      //     key: 4,
      //     amount: 95,
      //    svg: { fill: '#d966ff' },
      //    nome:'Empresa',
      //    cor:'blue'
      // },
      // {
      //     key: 5,
      //     amount: 35,
      //     svg: { fill: '#ecb3ff' },
      //     nome:'Empresa',
      //     cor:'yellow'
      // }
  ]


    return (
      <View style={styles.fill}
      >
        <ScrollView >

{

 <GeraGraficoBar

            dada={data1}
          />
}

         


          <GeraGraficoCirculo

            dada={data1}
          />
          
        </ScrollView>
      </View>
    );
  }
}