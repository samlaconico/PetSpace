import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, Button, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './Components/Profile.js';
import { HomeScreen } from './Components/Home.js';
import { SearchScreen } from './Components/Search.js';
import { MapView, Permissions } from 'react-native-maps';
import { DogBreedsScreen } from './Components/DogBreedInfo.js';
import { createStackNavigator } from '@react-navigation/stack';
import { CatBreedsScreen } from './Components/CatBreedInfo.js';
import { Manual } from './Components/Manual.js';
import { PetProfile } from './Components/PetProfile.js';
import { AccountInformation } from './Components/AccountInformation.js';
import { LoginScreen } from './Components/Login.js';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
// Stack Navigator for Home screen
function HomeStackNavigator({navigation}) {
  return (
    <HomeStack.Navigator screenOptions = {{ headerShown : false }} initialRouteName = "HomeScreen">
      <HomeStack.Screen name = "HomeScreen" component = {HomeScreen} />
      <HomeStack.Screen name = "DogBreedsScreen" component = {DogBreedsScreen} options={({navigation})}/>
      <HomeStack.Screen name = "CatBreedsScreen" component = {CatBreedsScreen} />
      <HomeStack.Screen name = "Manual" component = {Manual}/>
      <HomeStack.Screen name = "PetProfile" component = {PetProfile}/>
    </HomeStack.Navigator>
  )
}

// Stack Navigator for Profile screen
const ProfileStack = createStackNavigator();
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions = {{ headerShown : false }} >
          <ProfileStack.Screen name = "ProfileScreen" component = {ProfileScreen} options = {{ title: 'Profile'}} />
          <ProfileStack.Screen name="AccountInformation" component={AccountInformation} options={{ title: 'Account Information' }} />
    </ProfileStack.Navigator>
  );
}

// Main function to display the App
export default function App({ navigation }) {
  return (
      // NavigationContainer component to wrap the navigators and manage the navigation stack
      <NavigationContainer> 
        {/* Bottom Tab Navigator to navigate between different screens */}
        <LoginStack.Navigator screenOptions = {{ headerShown : false, gestureEnabled : false }} >
          <LoginStack.Screen name="Login" component={LoginScreen} options={({navigation})}/>
          <LoginStack.Screen name="PetSpace" component={MainTabs}/>
        </LoginStack.Navigator>
      </NavigationContainer>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator 
          // Customizing the appearance of the header for each screen in the Tab Navigator
          screenOptions={{
            headerTitleAlign: 'center', // Aligning the title in the center
            headerStyle: {backgroundColor: 'white', }, // Background color of the header
            headerTitleStyle: {fontSize: 30}, // Font size for the title
            headerTransparent: true, // Making the header transparent
            tabBarIconStyle: { display: "none" },
          }}>
          {/* Tab screen to display HomeStackNavigator */}
          <Tab.Screen 
            name="Home" 
            component={HomeStackNavigator} 
            options={({navigation}) => ({
              title: 'Rescue Me', // Title of the screen
              headerRight: () => (
                // Adding a custom right header button
                <TouchableOpacity 
                  activeOpacity={0.5}
                  onPress={() => Alert.alert('Left button pressed')}>
                  <Image
                    source={require('./assets/icon-ios.png')}
                    style={{width:50, height: 50}}
                  />
                </TouchableOpacity>
              ), 
              headerRightContainerStyle: {paddingRight: 10}, // Adding padding to the right header button
              headerLeftContainerStyle: {paddingRight: 10} // Adding padding to the left header
            })}
          />

          {/* Tab screen to display the SearchScreen */}
          <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
              title: 'Search', // Title of the screen
              headerRightContainerStyle: {paddingRight: 10}, // Adding padding to the right header
              headerLeftContainerStyle: {paddingRight: 10} // Adding padding to the left header
            }}
          />
           

          {/* Tab screen to display ProfileStackNavigator */}
          <Tab.Screen 
            name="Profile" 
            component={ProfileStackNavigator} 
            options={{
              title: 'Profile', // Title of the screen
              headerRightContainerStyle: {paddingRight: 10}, // Adding padding to the right header
              headerLeftContainerStyle: {paddingRight: 10} // Adding padding to the left header
            }}
          />

        </Tab.Navigator>
      )
}

const HeaderStyle = StyleSheet.create({

});

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  
});