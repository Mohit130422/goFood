import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/logo-light.png' 

const SplashScreen = () => {
    
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("WelcomeScreen");
        }, 3000);
    })
 
    return (
        <View style={styles.container}>
            <AppStatusBar/>
            {/* <Text style={styles.textStyle}>Go Food</Text> */}
            <Image source={Logo} style={styles.logo_one}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.ColorPrimary      
    },
    textStyle:{
        fontSize:50,
        fontWeight:'900',
        color:Colors.white,
        fontFamily:Fonts.primaryExtraBold,
    },
    logo_one:{
        height:200,
        width: 200,
        resizeMode:'contain'
    }
});
export default SplashScreen
