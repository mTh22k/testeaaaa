//import * as React from 'react';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './DespesasGeraisStyles';
import { Images } from '../../Themes';
import GeraGraficoBar from '../../Components/GeraGraficoBar/GeraGraficoBar';

interface Props {
  navigation: any
}

export default class DespesasGerais extends React.Component<Props>{

  constructor(props: Props) {
    super(props);

  }

  state = {

    despesa: 2500.00,
    nomeEmpresa: 'Empresa Tal-EPP ',
    mes: 'Fevereiro'
  }

  render() {
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

          <View style={{ height: 70, width: '100%', padding: 10 }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Despesa: R$ {this.state.despesa}</Text>
          </View>

          {/* <GeraGraficoBar

          dada={data}
          /> */}

          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 68, color: '#BDC3C7', fontWeight: 'bold' }}>ZAIDO</Text>
          </View>

          <View style={{ alignItems: 'center', borderColor: 'yellow', borderWidth: 5 }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', padding: 6, backgroundColor: 'black' }}>Total: - R$ {this.state.despesa}</Text>
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
