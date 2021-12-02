import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native'
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo'
import UserInput from '../../components/UserInput'
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts'
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {

    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()

    const navigation = useNavigation();


    const userLogin =()=>{
        Alert.alert("Login Successfull");
    }
    return (
        <View style={styles.container}>
            <AppStatusBar />
            <ScrollView style={styles.ScrollView}>
                <View style={{marginBottom:20, marginTop:20}}>
                    <Logo/>
                    <Text style={styles.loginText}>Login into GoFood</Text>
                    <Text style={styles.subText}>Enter Mobile No. to Use our Services</Text>
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
                    <Button title={"Login"} onPress={()=>userLogin()}/>

                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.navigate("Register")}>
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
export default Login
