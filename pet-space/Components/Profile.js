import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { authentication} from "../firebase";

// ProfileScreen component to display the profile screen of the app
const ProfileScreen = ({ navigation }) => {
  const currentUser = authentication.currentUser;
    const handleSignOut = ()=> {
      authentication
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error=> alert(error.message))
    }
    return (
      // ImageBackground component to display background image
      <ImageBackground source={require('../assets/background.jpg')} 
       imageStyle={styles.bgImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={require('../assets/transparent.png')} style={styles.emptyImageBox} />
          {/* TouchableOpacity component to navigate to AccountInformation screen when pressed */}
          <Text style={styles.text}>{currentUser.email}</Text>
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
           onPress={handleSignOut}>
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
        opacity: .2,
    },
    // Style for View component
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    // Style for Image component
    emptyImageBox: {
      width: 250,
      height: 250,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'transparent',
      marginBottom: 20,
      borderRadius: 100,
    },
    // Style for TouchableOpacity component
    menuItem: {
      backgroundColor: 'orange',
      borderWidth: 1,
      borderColor: 'black',
      fontSize: 18,
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    // Style for text in TouchableOpacity component
    menuText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      borderWidth: 1,
      backgroundColor:'#BEBEBE',
      borderRadius: 5,
      marginBottom: 20,
      padding: 10,
    }
  });
  
  // Exporting ProfileScreen component
  export { ProfileScreen };
