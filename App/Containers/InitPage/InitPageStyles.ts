import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes';

export default {

    ...ApplicationStyles.texts,
    ...ApplicationStyles,

        inativa: {
          flexDirection: 'row',
          borderTopWidth:4,
          borderColor: "#ffffff",
         
          alignItems:'center',
          justifyContent:'center',
         
        }as ViewStyle,
        ativa: {
          //borderWidth:1,
          //borderColor: "#191970",
          alignItems:'center',
          justifyContent:'center',
          
         
         
        
        }as ViewStyle,
        texto: {
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          
         // height:'0%',
          backgroundColor:"white",
        }as TextStyle,
        texto1: {
          alignItems:'flex-end',
          justifyContent:'center',
          width:'90%',
          height:'90%',
        }as TextStyle,
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        logo: {
          width: 250,
          height: 500,
        }as ViewStyle,
        imageViewStyle:{
          //borderWidth:13,
          borderBottomColor: 'black',
          borderBottomWidth: 13,
          borderTopWidth:13,
          borderColor: "#00ffff",
          width: 200, 
          height: 150, 
          borderTopLeftRadius: 15, 
          overflow: "hidden"
        }as ViewStyle,
        buttonContainer: {
          width: 200,
          alignItems: 'center',
        }as ViewStyle,
        buttonText: {
          textAlign: 'center',
          color: '#4C64FF',
          padding: 15,
          marginLeft: 1,
          marginRight: 1,
          width: 198
        }as TextStyle,
        body: {
         // backgroundColor: '#000080',
          width:'100%',
          height:'100%'
        }as ViewStyle,
        sectionContainer: {
          marginTop: 32,
          //alignContent:'center',
        
          alignItems:'center',
         // alignSelf:'center',
          paddingHorizontal: 24,
        }as ViewStyle,
    
}