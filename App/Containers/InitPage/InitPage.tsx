//import * as React from 'react';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './InitPageStyles';
import { Images } from '../../Themes';

interface Props {
  navigation: any
}

export default class InitPage extends React.Component<Props>{

  constructor(props: Props) {
    super(props);

  }

  state = {
    count: 0 + 1.1,
    count1: 0

  }

  render() {
    return (
      <View style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>


        <View style={styles.body}>

          <View style={styles.sectionContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('DespesasGeraisScreen')}>
              <Text style={{ marginBottom: '20%' }} >
                <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Despesas </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ReceitasGeraisScreen')}>
              <Text style={{ marginBottom: '20%' }} >
                <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Receitas </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('EmpresasScreen')}>
              <Text style={{ marginBottom: '20%' }} >
                <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Empresas </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RDRScreen')}>
              <Text style={{ marginBottom: '20%' }} >
                <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>RDR </Text>
              </Text>
            </TouchableOpacity>

            {/* 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
              <Text style={{ marginBottom: '20%' }} >
                <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Login </Text>
              </Text>
            </TouchableOpacity>
 
              <Text style={{ marginBottom: '20%' }} >
                <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>{this.state.count*2+5} </Text>
              </Text> */}

          </View>

        </View>

      </View>
    );
  }
}
