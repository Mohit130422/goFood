import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo'
import UserInput from '../../components/UserInput'
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts'
import { useNavigation } from '@react-navigation/native';

const Register = (props) => {

    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()


    const navigation = useNavigation();
    const userRegister =()=>{
        Alert.alert("Registration Successfull");
    }
    return (
        <View style={styles.container}>
            <AppStatusBar />
            <ScrollView style={styles.ScrollView}>
                <View style={{marginBottom:20, marginTop:20}}>
                    <Logo/>
                    <Text style={styles.loginText}>Create a New Account</Text>
                    <Text style={styles.subText}>Enter Your Name</Text>
                    <UserInput 
                    placeholder='Enter Your Name'
                    maxLength={10}
                    value={name}
                    onChangeText={setName} />
                    <Text style={styles.subText}>Enter Mobile Number</Text>
                    <UserInput 
                    placeholder='Enter Mobile Number'
                    keyboardType='numeric'
                    maxLength={10}
                    value={mobile}
                    onChangeText={setMobile} />
                    <Text style={styles.subText}>Enter Password</Text>
                    <UserInput
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    maxLength={12}
                    value={password}
                    onChangeText={setPassword}
                    />
                    <Button title={"Register"} onPress={()=>userRegister()}/>

                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.navigate('Login')}>
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
    ScrollView:{
        padding:20
    },
    loginText:{
        fontSize: 20,
        fontFamily:Fonts.primaryBold,
        color:Colors.black,
        textAlign:'center'
    },
    subText:{
        fontFamily:Fonts.primaryRegular,
        fontSize:16,
        color:Colors.gray,
        paddingTop:10
    }

});
export default Register
