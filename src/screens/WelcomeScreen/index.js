import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import Slider1 from '../../assets/images/slide1.png'
import Slider2 from '../../assets/images/slide2.png'
import Slider3 from '../../assets/images/slide3.png'
import AppStatusBar from '../../components/AppStatusBar'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts';


const slides = [
    {
        key: 1,
        title: 'Order Online',
        text: 'Lorem Ipsum is simply dummy',
        image: Slider1,
    },
    {
        key: 2,
        title: 'Fully Sanatized',
        text: 'Lorem Ipsum is simply dummy',
        image: Slider2,
    },
    {
        key: 3,
        title: 'Fast Delivery',
        text: 'Lorem Ipsum is simply dummy',
        image: Slider3,
    }
];

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const _onDone = () => {
        navigation.navigate("Login")
    }
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.imageStyle} />
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.subtitle}>{item.text}</Text>
            </View>

        );
    }
    const _renderNextButton = () => {
        return (
            <View style={styles.button}>
                <Text style={styles.next}>Next</Text>
            </View>
        );
    }
    const _renderDoneButton = () => {
        return (
            <View style={styles.button}>
                <Text style={styles.done}>Done</Text>
            </View>
        )

    }
    return (

        <View style={styles.container}>
            <AppStatusBar />
            <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} bottomButton dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle}
                renderNextButton={_renderNextButton} renderDoneButton={_renderDoneButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dotStyle: {
        backgroundColor: Colors.black,
    },
    activeDotStyle: {
        backgroundColor: Colors.ColorPrimary,
        width: 25
    },
    slide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70
    },
    imageStyle: {
        width: '100%',
        height: '70%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: Fonts.primaryBold,
        fontSize: 20,
        color: Colors.black,

    },
    subtitle: {
        fontFamily: Fonts.primaryRegular,
        textAlign: 'center',
        color: Colors.black,
        padding: 10
    },
    button:{
        width:150,
        backgroundColor:Colors.ColorPrimary,
        paddingBottom:15,
        paddingTop:15,
        alignItems:'center',
        alignSelf:'center',
        borderRadius:50
    },
    next:{
        alignSelf:'center',
        color:Colors.white,
        fontFamily: Fonts.primaryBold,
        fontSize: 16,
    },
    done:{
        alignSelf:'center',
        color:Colors.white,
        fontFamily: Fonts.primaryBold,
        fontSize: 16,
    },
});

export default WelcomeScreen
