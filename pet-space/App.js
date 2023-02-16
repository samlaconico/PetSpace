import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, Button, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './Components/Profile.js';
import Login from './Components/Login.js'; //LOGIN
import Signup from './Components/Signup.js';
import { HomeScreen } from './Components/Home.js';
import { SearchScreen } from './Components/Search.js';
import { MapView, Permissions } from 'react-native-maps';
import { DogBreedsScreen } from './Components/DogBreedInfo.js';
import {createStackNavigator} from '@react-navigation/stack';
import { CatBreedsScreen } from './Components/CatBreedInfo.js';
import { Manual } from './Components/Manual.js';
import React, {Component} from 'react';
import {auth} from './firebase/config';
 

const Stack = createStackNavigator();
function MyStack({navigation}) {
  return (
    <Stack.Navigator screenOptions = {{ headerShown : false }} initialRouteName = "Login">
          <Stack.Screen name = "Login" component = {Login} />
          <Stack.Screen name = "Signup" component={Signup}/>
          <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
          <Stack.Screen name = "DogBreedsScreen" component = {DogBreedsScreen} options={({navigation})}/>
          <Stack.Screen name = "CatBreedsScreen" component = {CatBreedsScreen} />
          <Stack.Screen name = "Manual" component = {Manual}/>
        </Stack.Navigator>
  );
}
export default function App({ navigation }) {
  return (
      <NavigationContainer> 
        <Tab.Navigator screenOptions={{headerTitleAlign: 'center',
        headerStyle: {backgroundColor: 'white', }, headerTitleStyle: {fontSize: 30}, headerTransparent: true, }}>
          <Tab.Screen name="Home" component={MyStack} options={({navigation}) => ({title:'Rescue Me',
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}
            onPress={() => Alert.alert('Left button pressed')}>
              <Image
                source={require('./assets/icon-ios.png')}
                style={{width:50, height: 50}}
              />
            </TouchableOpacity>
          ), 
          headerRightContainerStyle: {paddingRight: 10},
          headerLeftContainerStyle: {paddingRight: 10}})}
          />

          <Tab.Screen name="Search" component={SearchScreen} options={{title:'Search', 
          headerRightContainerStyle: {paddingRight: 10},
          headerLeftContainerStyle: {paddingRight: 10}}}
          />
           
   

          <Tab.Screen name="Profile" component={ProfileScreen} options={{title:'Profile', 
          headerRightContainerStyle: {paddingRight: 10},
          headerLeftContainerStyle: {paddingRight: 10}}}
          />

        </Tab.Navigator>

        
        
        
      </NavigationContainer>



       

  );
}



const HeaderStyle = StyleSheet.create({

});

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  
});