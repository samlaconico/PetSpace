import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput,Button, StyleSheet,Text,View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Components/Login';
import HomeScreen from './Components/Home';

const Stack = createNativeStackNavigator();

export default function App(){
    return (
        <NavigationContainer> 
            <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}}name = "Login" component = {LoginScreen}/>
            <Stack.Screen name = "Home" component = {HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});