import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors';

const UserInput = (props) => {

    const [hasFocus, setHasFocus] = useState(false)

    return (
        <View style={{marginBottom:12}}>
            <TextInput
                style={[hasFocus ? styles.focusInputStyle:styles.inputStyle, props.style]}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                maxLength={props.maxLength}
                onFocus={()=>{setHasFocus(true)}}
                onBlur={()=>{setHasFocus(false)}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle:{
       borderBottomWidth:1,
       borderBottomColor:Colors.black,
       marginTop:10
    },
    focusInputStyle:{
       borderBottomWidth:1,
       borderBottomColor:Colors.ColorPrimary,
       marginTop:10
    }
});

export default UserInput
