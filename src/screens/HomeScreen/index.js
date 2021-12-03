import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import AppStatusBar from '../../components/AppStatusBar'



const Home = () => {
    return (
        <View style={styles.container}>
            <AppStatusBar/>
            <Text style={{textAlign:'center', fontFamily:Fonts.primaryExtraBold, fontSize:30,}}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Home
