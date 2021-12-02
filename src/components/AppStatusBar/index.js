import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Colors from '../../Themes/Colors'

const AppStatusBar = (props) => {
    return (
        <StatusBar
           backgroundColor={props.backgroundColor ? props.backgroundColor:Colors.ColorPrimary}
           barStyle={props.barStyle ? props.barStyle :'default'}
           translucent={props.translucent ? true : false}


        />
    )
}

export default AppStatusBar
