import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import OTPScreen from './src/screens/OTPScreen';
import Home from './src/screens/HomeScreen';

const initialStack = createNativeStackNavigator();
const App = () => {
  const InitialStackScreen =()=>(
    <initialStack.Navigator screenOptions={{headerShown:false}}>
      <initialStack.Screen name='SplashScreen' component={SplashScreen}/>
      <initialStack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
      <initialStack.Screen name='Login' component={Login}/>
      <initialStack.Screen name='Register' component={Register}/>
      <initialStack.Screen name='OTPScreen' component={OTPScreen}/>
      <initialStack.Screen name='Home' component={Home}/>
    </initialStack.Navigator>
  )
  return (
    <NavigationContainer>
      <InitialStackScreen></InitialStackScreen>
    </NavigationContainer>
   
  )
}
export default App
