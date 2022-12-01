import { ImageBackground, SectionList, StyleSheet, Text, Image, View,  FlatList, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';

export function GermanShepherdManualScreen() {
    return (

        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>
                
            <Text style={{fontSize: 20, fontWeightight: "bold", marginTop :100, paddingBottom: 12, alignSelf: "center"}}>German Shepherd Breed Information</Text>
                <SafeAreaView style ={{ flex: 3, marginTop: 5}}>
                    <SectionList
                    sections={Information}
                    keyExtractor = {(item, index) => item + index}
                    renderItem = { ( {item}) => <GermanShepherdInfo item = {item} />}
                    renderSectionHeader = {({section : {text}}) => (
                        <Text style = {styles.itemText} > {text} </Text>
                    )}
                    />
                </SafeAreaView>

            </View>
        </ImageBackground>
    );
  }

  const  GermanShepherdInfo = ({ item }) => {
    return (
      <View style={styles.item}>
        
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  const Information = [
    {
        data : [
            { text : "Life Expectancy: 9-13 years\nSize: L \n Diet: Animal-based protein sources (High in fat, vitamins, and minerals) \n Grooming maintenance: Brushed 3-4 times a week , Bath every 3-4 months(No overbathing) \n Exercise Needed: At least 2 hours a day", uri: "https://www.perfectdogbreeds.com/wp-content/uploads/2020/04/German-Shepherd.jpg",  key: '1'},      
        ]
    }
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
      },

      itemText: {
        textAlign: "center",
        color: '#121212',
        marginTop: 5,
        fontWeight: 'bold',
      },
    

});