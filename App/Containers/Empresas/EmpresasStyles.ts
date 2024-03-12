import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes';

export default {

  ...ApplicationStyles.texts,
  ...ApplicationStyles,

  
      texto: {
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        
       // height:'0%',
        backgroundColor:"white",
      }as TextStyle,
     

      body: {
       // backgroundColor: '#000080',
        width:'100%',
        height:'100%'
      }as ViewStyle, 
  
}