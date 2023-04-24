import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import email from 'react-native-email';
import { LoginScreen } from 'pet-space/Components/Login.js';

export function PetProfile() {
    const route = useRoute();
    const name = route.params.name;

    return (
        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>
                <Pressable onPress={() => handleEmail(route.params.name)}>
                <Text style={styles.dogName}>{route.params.name}</Text>
                <Image
                    source={{
                      uri: route.params.img,
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                  />
                    <Text style={styles.bodyText}>
                        {route.params.text}
                    </Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
    
  }

function findElement(array, title) {
    return array.find((element) => {
        return element.key === title;
    })
}

function handleEmail(name){
    const to = ['LAShelter@email.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: 'Interested in fostering ' + name,
        body: "Hello, my name is [NAME] and I'm interested in fostering " + name + ". If you could please take a look at my application and get back to me, it would be much appreciated",
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
}

const styles = StyleSheet.create({
    main: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    bgImage: {
        opacity: .1,
    },

    item: {
        margin: 10,
    },

    itemPhoto: {
        width: 300,
        height: 300,
        borderRadius: 11,
        borderWidth: 10,
        borderColor : '#000000',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },

    dogName: {
        textAlign: "center",
        color: '#121212',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 72,
        padding: 15,
    },

    bodyText: {
        textAlign: "center",
        color: '#121212',
        margin: 5,
        fontSize: 32,
        padding: 15,
    }
});