import { ImageBackground, SectionList, StyleSheet, Text, Image, View, Pressable, } from 'react-native';
import { SafeAreaView } from 'react-native';

export function CatBreedsScreen({navigation}) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>
            <Text style={{fontSize: 20, fontWeightight: "bold", marginTop :100, paddingBottom: 12, alignSelf: "center"}}>Breed Information</Text>
                <SafeAreaView style ={{ flex: 3, marginTop: 5}}>
                    <SectionList
                    sections={BreedList}
                    keyExtractor = {(item, index) => item + index}
                    renderItem = { ( {item}) => <ListCats item = {item} navigation = {navigation}/>}
                    renderSectionHeader = {({section : {text}}) => (
                        <Text style = {styles.itemText} > {text} </Text>
                    )}
                    />
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
  }


  const navigateTo = (navigation, key) => {
    navigation.navigate("Manual", {key,});
  }

  //Component for scrolling list of cat breeds

  const  ListCats = ({ item, navigation}) => {
    return (
      <View style={styles.item}>
        <Pressable onPress={() => navigateTo(navigation, item.key)}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      </View>
    );
  };

  //Cat List

  const BreedList = [
    {
        data : [
          { text : "Ragdoll", uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Ragdoll.jpg?itok=uoJljrty",  key: '14'},
          { text : "Maine Coon", uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Maine-Coon-Cat.jpg?itok=XrHCK4xn", key: '15'},
          { text : "Persian", uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Persian-Long-Hair.jpg?itok=OEork2Dh", key: '16'},
          { text : "British Shorthair", uri: "https://excitedcats.com/wp-content/uploads/2020/12/British-Shorthair-cat_Shutterstock_PHOTOCREO-Michal-Bednarek.jpg", key: '17'},
          { text : "Abyssinian", uri: "https://www.purina.co.uk/sites/default/files/2022-06/Abyssinian-Cat-Breed_0.jpg?itok=r3GCHbzx", key: '18'},
          { text : "American Shorthair", uri: "https://media.kidadl.com/Purrrfect_Facts_About_The_American_Shorthair_Cat_Kids_Will_Love_d62617998c.jpg", key: '19'},
          { text : "Scottish Fold", uri: "https://allaboutcats.com/wp-content/uploads/2020/10/the-Scottish-Fold-cat.jpg", key: '20'},
          { text : "Sphynx", uri: "https://img.cutenesscdn.com/375/cme-data/getty/2b6b4c0c3c7e41db858c525787b832bd.jpg", key: '21'},
          { text : "Siamese", uri: "https://images.ctfassets.net/s7r1h98f1v8b/5aDOPOV4ic3iZDdYMyM9tk/919476d390a2a81644a8ceedeb3b1f9f/thai_siamese_cat_breed.jpg", key: '22'},
          { text : "Bengal", uri: "https://allaboutcats.com/wp-content/uploads/2020/10/Bengal.jpg", key: '23'},
          { text : "Siberian", uri: "https://cf.ltkcdn.net/cats/cat-breeds/images/orig/325227-1877x1251-siberian-cat.jpg", key: '24'},
          { text : "Birman", uri: "https://dinoanimals.com/wp-content/uploads/2021/01/Birman-cat-1.jpg", key: '25'},
          { text : "Russian Blue", uri: "https://www.petplace.com/static/5b0e77c42271ed6918a3fae4b808f356/98569/AdobeStock_112943750.jpg", key: '26'},
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