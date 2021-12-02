import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Text style={styles.buttonTitle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:Colors.ColorPrimary,
        paddingTop:12,
        paddingBottom:12,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderRadius:10
    },
    buttonTitle:{
        fontFamily:Fonts.primaryRegular,
        fontSize:16,
        color:Colors.white
    }
});
export default Button
