import { ImageBackground, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} 
        imageStyle={styles.bgImage} style={styles.backgroundImage}>
            <View style={styles.container}>

            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    bgImage: {
        opacity: .2,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },

});

    export { SettingsScreen };