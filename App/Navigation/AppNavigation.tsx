//import Page1 from './Page1';
//import Page2 from './Page2';
import React from 'react';


import styles from './Styles/NavigationStyles';
import MenuMainButton from '../Components/MenuMainButton/MenuMainButton';
import MenuHelpButton from '../Components/MenuHelpButton/MenuHelpButton';
import MenuMainButton1 from '../Components/MenuMainButton1/MenuMainButton1';
import MenuHelpButton1 from '../Components/MenuHelpButton1/MenuHelpButton1';
import MenuArchiveButton from '../Components/MenuArchiveButton/MenuArchiveButton';
import MenuArchiveButton1 from '../Components/MenuArchiveButton1/MenuArchiveButton1';


import StartPageAllButtons from '../Containers/StartPageAllButtons/StartPageAllButtons';
import InitPage from '../Containers/InitPage/InitPage';



import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
//import Page1 from '../../src/Page1';
import { View } from 'react-native'; 

import MenuBackButton from '../Components/MenuBackButton/MenuBackButton';
import DespesasGerais from '../Containers/DespesasGerais/DespesasGerais';
import MenuFiltroMes from '../Components/MenuFiltroMes/MenuFiltroMes';
import ReceitasGerais from '../Containers/ReceitasGerais/ReceitasGerais';
import Empresas from '../Containers/Empresas/Empresas';
import RDR from '../Containers/RDR/RDR';

 

//createStackNavigator(RouteConfigs, StackNavigatorConfig);

const Routes = createAppContainer(
 


createStackNavigator({
 
    ProfileScreenA: 
  
    {
        screen: InitPage,
        /*navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
            headerTitle: <MenuMainButton testID={'main'} navigation={navigation as any} />,
            headerLeft: <MenuHelpButton testID={'help'} navigation={navigation as any} />,
            headerRight: <MenuArchiveButton testID={'archive'} navigation={navigation as any} />
        })*/

        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
           // title: 'Livre de Chant',
            headerLeft: <View />,
            headerRight: <View />
        })

    },

    DespesasGeraisScreen: 
  
    {
        screen: DespesasGerais,
       

        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
            title: 'Despesas',
            headerLeft:<MenuBackButton testID={'back'} navigation={navigation as any} />, 
            headerRight:<MenuFiltroMes testID={'filtro'} navigation={navigation as any} />
        })

    },

    ReceitasGeraisScreen: 
  
    {
        screen: ReceitasGerais,
       

        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
            title: 'Receitas',
            headerLeft:<MenuBackButton testID={'back'} navigation={navigation as any} />, 
            headerRight:<MenuFiltroMes testID={'filtro'} navigation={navigation as any} />
        })

    },
    

    EmpresasScreen: 
  
    {
        screen: Empresas,
       

        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
            title: 'Empresas',
            headerLeft:<MenuBackButton testID={'back'} navigation={navigation as any} />, 
            headerRight:<MenuFiltroMes testID={'filtro'} navigation={navigation as any} />
        })

    },

    RDRScreen: 
  
    {
        screen: RDR,
       

        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
            title: 'RDR',
            headerLeft:<MenuBackButton testID={'back'} navigation={navigation as any} />, 
            headerRight:<MenuFiltroMes testID={'filtro'} navigation={navigation as any} />
        })

    },
    

    MainScreen: {
        screen: StartPageAllButtons,
        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.appHeader,
            headerTitleStyle: styles.title,
            headerLeftContainerStyle: {marginLeft:10},
            headerTitle: <MenuMainButton1 testID={'main'} navigation={navigation as any} />,
            headerLeft: <MenuHelpButton testID={'help'} navigation={navigation as any} />,
            headerRight: <MenuArchiveButton testID={'archive'} navigation={navigation as any} />
        })
    },


  
    //...MyOtherRoutes,
  })
);

export default Routes;