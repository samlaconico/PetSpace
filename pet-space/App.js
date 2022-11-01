import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, Button, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './Components/Profile.js';
import { HomeScreen } from './Components/Home.js';
import { SearchScreen } from './Components/Search.js';


export default function App({ navigation }) {
  return (
      <NavigationContainer> 
        <Tab.Navigator screenOptions={{headerTitleAlign: 'center',
        headerStyle: {backgroundColor: 'white', }, headerTitleStyle: {fontSize: 30}, headerTransparent: true, }}>
          <Tab.Screen name="Home" component={HomeScreen} options={({navigation}) => ({title:'Rescue Me',
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5}
            onPress={() => Alert.alert('Left button pressed')}>
              <Image
                source={require('pet-space/assets/icon-ios.png')}
                style={{width:50, height: 50}}
              />
            </TouchableOpacity>
          ), 
          headerRightContainerStyle: {paddingRight: 10},
          headerLeftContainerStyle: {paddingRight: 10}})}
          />

          <Tab.Screen name="Search" component={SearchScreen} options={{title:'Rescue Me', 
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
