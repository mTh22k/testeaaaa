//import * as React from 'react';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './ReceitasGeraisStyles';
import { Images } from '../../Themes';
import GeraGraficoBar from '../../Components/GeraGraficoBar/GeraGraficoBar';

interface Props {
  navigation: any
}

export default class ReceitasGerais extends React.Component<Props>{


  constructor(props: Props) {
    super(props);

  }

  state = {

    despesa: 2500.00,
    nomeEmpresa: 'Empresa Tal-EPP ',
    mes: 'Fevereiro'
  }

  

  render() {
    const data1 = [
      {
          key: 1,
          amount: 150,
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
  
    const data = [5000, this.state.despesa]
    return (
      <View >
        <View style={{ width: '100%', height: '84%', alignContent: 'center', alignItems: 'center', backgroundColor: "#808B96" }}>

          <View style={{ height: 70, width: '100%', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{this.state.nomeEmpresa}</Text>
          </View>

          <View style={{ alignItems: 'center', borderColor: 'yellow', borderWidth: 5 }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', padding: 6, backgroundColor: 'black' }}>{this.state.mes}</Text>
          </View>

          {/* <View style={{ height: 70, width: '100%', padding: 10 }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Renda : R$ {this.state.despesa}</Text>
          </View> */}
<View style={{alignContent:'flex-start', width: '100%', padding: 10 }}>
          <GeraGraficoBar

          dada={data1}
          />
</View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 68, color: '#BDC3C7', fontWeight: 'bold' }}>ZAIDO</Text>
          </View>

          <View style={{ alignItems: 'center', borderColor: 'yellow', borderWidth: 5 }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', padding: 6, backgroundColor: 'black' }}>Total: + R$ {this.state.despesa}</Text>
          </View>
        </View>

        {/**As quatro botões de baixo */}

        <View style={{ flexDirection: 'row', backgroundColor: "#808B96" }}>
          <View style={{ width: 90, height: 90, backgroundColor: 'black' }}>
            <Image source={Images.barButton1} style={{ width: 80, height: 80, margin: 5 }} />
          </View>
          <View style={{ width: 90, height: 90 }}>
            <Image source={Images.barButton2} style={{ width: 80, height: 80, margin: 5 }} />
          </View>
          <View style={{ width: 90, height: 90, backgroundColor: 'black' }}>
            <Image source={Images.barButton3} style={{ width: 80, height: 80, margin: 5 }} />
          </View>
          <View style={{ width: 90, height: 90, backgroundColor: 'black' }}>
            <Image source={Images.barButton4} style={{ width: 80, height: 80, margin: 5 }} />
          </View>
        </View>


      </View>
    );
  }
}
