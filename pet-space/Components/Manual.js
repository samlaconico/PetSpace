import { useRoute } from '@react-navigation/native';
import { ImageBackground, SectionList, StyleSheet, Text, Image, View,  FlatList, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';

export function Manual() {
    const route = useRoute();

    const currentBreedName = (findElement(Information, route.params.key).name)
    const currentBreedInfo = (findElement(Information, route.params.key).text)
    const currentBreedImage = (findElement(Information, route.params.key).uri)

    return (
        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>
            <Text style={{fontSize: 20, fontWeightight: "bold", marginTop :100, paddingBottom: 12, alignSelf: "center"}}>{currentBreedName} Information </Text>
                
                <SafeAreaView style ={{ flex: 3, marginTop: 5}}>
                <View style={styles.item}>
                  <Image
                    source={{
                      uri: currentBreedImage,
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                  />
                  <Text style={styles.itemText}>{currentBreedInfo}</Text>
                </View>
                </SafeAreaView>

            </View>
        </ImageBackground>
    );
  }

  function findElement(array, title) {
    return array.find((element) => {
      return element.key === title;
    })
  }

  const Information = [
    { name: "German Shepherd", text : "Life Expectancy: 9-13 years\nSize: L \n Diet: Animal-based protein sources (High in fat, vitamins, and minerals) \n Grooming maintenance: Brushed 3-4 times a week , Bath every 3-4 months(No overbathing) \n Exercise Needed: At least 2 hours a day", uri: "https://www.perfectdogbreeds.com/wp-content/uploads/2020/04/German-Shepherd.jpg",  key: '1'},
    { name: "Pitbull", text : "i am a pitbull", uri: "https://images.pexels.com/photos/5379723/pexels-photo-5379723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", key: '2' }      
  ]

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

      itemText: {
        textAlign: "center",
        color: '#121212',
        marginTop: 5,
        fontWeight: 'bold',
      },
    

});