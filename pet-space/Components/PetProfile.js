import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';

export function PetProfile() {

    const route = useRoute();

    return (
        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>
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
            </View>
        </ImageBackground>
    );
    
  }

  function findElement(array, title) {
    return array.find((element) => {
        return element.key === title;
    })
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