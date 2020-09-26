import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../components/SplashScreen";
import SignInScreen from "../components/SignInScreen";
import RegisterScreen from "../components/RegisterScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;