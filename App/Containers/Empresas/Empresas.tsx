//import * as React from 'react';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './EmpresasStyles';
import { Images } from '../../Themes';

interface Props {
  navigation: any
}

export default class Empresas extends React.Component<Props>{


  render() {
    return (
      <View style={{ width: '100%', alignContent: 'center', alignItems: 'center'}}>

        <View style={{ height: 70, width: '100%', backgroundColor: 'blue' }}>

        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>


          <View style={styles.body}>


            <View style={styles.sectionContainer}>







            </View>


          </View>

        </TouchableOpacity>
      </View>
    );
  }
}
