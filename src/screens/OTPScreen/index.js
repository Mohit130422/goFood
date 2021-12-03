import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, Alert } from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import MailBox from '../../assets/images/mail_box_img.png'
import Fonts from '../../Themes/Fonts';
import Colors from '../../Themes/Colors';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


const OTPScreen = (props) => {

    const navigation = useNavigation();

    const pinInput = React.createRef();

    const [code, setCode] = useState()

    const _checkCode = (code) => {
       
    }

    const verifyOtp = () => {
        Alert.alert(JSON.stringify(props.route.params.phone), "is Verified Successfully");
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <AppStatusBar />
            <View style={styles.imageContainer}>
                <Image source={MailBox} style={styles.imageStyle} />
            </View>
            <View style={{ alignSelf: "center", padding: 20 }}>
                <Text style={styles.heading}>
                    OTP Verification
                </Text>
                <Text style={styles.subHeading}>
                    Please Enter Verification Code sent to You this Mobile Number - {props.route.params.phone}
                </Text>
                <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <SmoothPinCodeInput
                        ref={pinInput}
                        value={code}
                        onTextChange={setCode}
                        onFulfill={_checkCode}
                        autoFocus={true}
                        cellStyle={{
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: Colors.black
                        }}
                        cellStyleFocused={{
                            borderColor: Colors.ColorPrimary
                        }}
                        cellSpacing={15}
                    />
                </View>
                <View style={{marginTop:30}}>
                    <Button title="Verify OTP" onPress={verifyOtp} />
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    imageStyle: {
        height: 250,
        width: 250,
        resizeMode: 'contain'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70

    },
    heading: {
        fontFamily: Fonts.primaryBold,
        color: Colors.black,
        fontSize: 25,
        textAlign: 'center'
    },
    subHeading: {
        fontSize: 16,
        fontFamily: Fonts.primaryRegular,
        color: Colors.black,
        textAlign: 'center'

    }
});
export default OTPScreen
