import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo'
import UserInput from '../../components/UserInput'
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts'
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const Register = (props) => {

    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()


    const navigation = useNavigation();
    const userRegister = () => {
        if (name===undefined || name.length<3){
            Toast.show('Please Enter Valid Name', Toast.LONG);
        }
        else if (mobile===undefined || mobile.length!==10){
            Toast.show('Please Enter Valid Mobile No.', Toast.LONG);
        }
        else if (password===undefined || password.length<8){
            Toast.show('Please Enter Valid Password', Toast.LONG);
        }
        else{
           
            const data = {
                "name":name,
                "mobile":mobile,
                "password":password
            }

            storageData(JSON.stringify(data))
        }
         navigation.navigate('OTPScreen',{"phone":mobile})
    }
    const storageData=async(value)=>{
        try {
            await AsyncStorageLib.setItem("user",value)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <AppStatusBar />
            <ScrollView style={styles.ScrollView}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Logo />
                    <Text style={styles.loginText}>Create a New Account</Text>
                    <Text style={styles.subText}>!! Registration Form !!</Text>
                    <View style={{ position: 'relative' }}>
                    <UserInput
                        placeholder='Enter Your Name'
                        maxLength={10}
                        value={name}
                        onChangeText={setName}
                        style={{ paddingLeft: 30 }} />
                        <Icon name="user" size={24} color={Colors.black} style={{ position: 'absolute', top: 20 }} />
                    </View>

                    <View style={{ position: 'relative' }}>
                        <UserInput
                            placeholder='Enter Mobile Number'
                            keyboardType='numeric'
                            maxLength={10}
                            value={mobile}
                            onChangeText={setMobile}
                            style={{ paddingLeft: 30 }} />
                        <Icon name="smartphone" size={24} color={Colors.black} style={{ position: 'absolute', top: 20 }} />
                    </View>
                    <View style={{ position: 'relative' }}>
                        <UserInput
                            placeholder='Enter Password'
                            secureTextEntry={true}
                            maxLength={12}
                            value={password}
                            onChangeText={setPassword}
                            style={{ paddingLeft: 30 }} />
                        <Icon name="lock" size={24} color={Colors.black} style={{ position: 'absolute', top: 20 }} />
                    </View>
                    <Button title={"Register"} onPress={() => userRegister()} />

                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Login')}>
                        <Text>Already Have Account? Login Here!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    ScrollView: {
        padding: 20
    },
    loginText: {
        fontSize: 20,
        fontFamily: Fonts.primaryBold,
        color: Colors.black,
        textAlign: 'center'
    },
    subText: {
        fontFamily: Fonts.primaryRegular,
        fontSize: 20,
        color: Colors.gray,
        paddingTop: 10,
        textAlign: 'center',
        color: Colors.black,
        fontWeight: 'bold'
    }

});
export default Register
