import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ProfileScreen component to display the profile screen of the app
const ProfileScreen = ({ navigation }) => {
    return (
      // ImageBackground component to display background image
      <ImageBackground source={require('../assets/background.jpg')} 
       imageStyle={styles.bgImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* TouchableOpacity component to navigate to AccountInformation screen when pressed */}
          <TouchableOpacity style={styles.menuItem} 
           onPress={() => navigation.navigate('AccountInformation')}>
            <Text style={styles.menuText}>Account Information</Text>
          </TouchableOpacity>
          
          {/* TouchableOpacity component to display an alert when pressed */}
          <TouchableOpacity style={styles.menuItem} 
           onPress={() => alert('Notifications pressed')}>
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          
          {/* TouchableOpacity component to display an alert when pressed */}
          <TouchableOpacity style={styles.menuItem} 
           onPress={() => alert('Settings pressed')}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          
          {/* TouchableOpacity component to display an alert when pressed */}
          <TouchableOpacity style={styles.menuItem} 
           onPress={() => alert('Sign Out pressed')}>
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  
  // Styles object to add styles to the components
  const styles = StyleSheet.create({
    // Style for ImageBackground component
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    // Style for background image of ImageBackground component
    bgImage: {
        opacity: .1,
    },
    // Style for View component
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    // Style for TouchableOpacity component
    menuItem: {
      padding: 10,
      marginVertical: 10
    },
    // Style for text in TouchableOpacity component
    menuText: {
      fontSize: 18,
      fontWeight: 'bold'
    },
  });
  
  // Exporting ProfileScreen component
  export { ProfileScreen };