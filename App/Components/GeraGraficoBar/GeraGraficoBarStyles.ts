import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes';

export default {
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts,
    ...ApplicationStyles,

    text: {
        
        color: Colors.colors.white,
        fontSize: 14,
    } as TextStyle,

    bold: {
        fontWeight: 'bold',
    } as TextStyle
};
