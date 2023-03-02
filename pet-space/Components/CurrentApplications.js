import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

const CurrentApplications = ({ navigation }) => {

    return(
        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style = {styles.HeaderText}>CURRENT APPLICATIONS</Text>
            </View>
        </ImageBackground>
    );
};
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
      marginTop: -500,
      justifyContent: 'center',
      alignItems: 'center',
    },
    HeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 0,
    //backgroundColor: '#ECE4DC',
    }
});
export { CurrentApplications }