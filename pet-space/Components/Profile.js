import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export function ProfileScreen() {
    return (
        <ImageBackground source={require('pet-space/assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>

            </View>
        </ImageBackground>
    );
  }

const styles = StyleSheet.create({
    main: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    bgImage: {
        opacity: .1,
    }
});