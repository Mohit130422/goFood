import React from 'react'
import {Image, StyleSheet} from 'react-native'
import LogoImage from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <Image source={LogoImage} style={styles.image}/>
    )
}
const styles = StyleSheet.create({
    image:{
        width:140,
        height:100,
        alignSelf:'center',
        resizeMode:'contain'
    }
});
export default Logo
