import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo'
import UserInput from '../../components/UserInput'
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const Login = (props) => {

    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState({})

    const navigation = useNavigation();


    const userLogin = () => {
        if (mobile===undefined || mobile.length !==10){
            Toast.show('Please Enter Valid Mobile No.', Toast.LONG);
        }
        else if (password===undefined || password.length<8){
            Toast.show('Please Enter Valid Password', Toast.LONG);
        }
        else{
            if (mobile===user.mobile && password===user.password){
                //  Alert.alert("Login Successfull");
                 navigation.navigate('Home');
            }else{
                Toast.show('Invalid Credentials', Toast.LONG); 
            }
            
            
        }
    }

    useEffect(() => {
        getData();
    })

    const getData = async()=>{
        try {
            const value = await AsyncStorageLib.getItem("user")
            const data = JSON.parse(value);
            setUser(data)
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
                    <Text style={styles.loginText}>Login into GoFood</Text>
                    <Text style={styles.subText}>Enter Mobile No. & Password to Use our Services</Text>
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
                   
                    <View style={{position:'relative',}}>
                        <UserInput
                            placeholder='Enter Password'
                            secureTextEntry={true}
                            maxLength={12}
                            value={password}
                            onChangeText={setPassword}
                            style={{paddingLeft:30}}
                        />
                        <Icon name="lock" size={24} color={Colors.black} style={{ position: 'absolute', top: 20 }} />
                    </View>
                    <Button title={"Login"} onPress={() => userLogin()} />

                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate("Register")}>
                        <Text>New User? Please Register</Text>
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
        fontSize: 16,
        color: Colors.gray,
        paddingTop: 10,
        textAlign:'center'
    }

});
export default Login
