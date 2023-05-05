import { ImageBackground, SectionList, StyleSheet, Text, Image, View,  FlatList, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';

export function DogBreedsScreen({navigation}) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
            <View style={styles.main}>
            <Text style={{fontSize: 40, fontWeightight: "bold", marginTop :100, paddingBottom: 0, alignSelf: "center", fontWeight: "bold",}}>Breed Information</Text>
                <SafeAreaView style ={{ flex: 3, marginTop: 5}}>
                    <SectionList
                    sections={BreedList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor = {(item, index) => item + index}
                    renderItem = { ( {item}) => <ListDogs item = {item} navigation = {navigation}/>}
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


  //Component for scrolling list of dog breeds
  const  ListDogs = ({ item, navigation}) => {
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

  //Dog List

  const BreedList = [
    {
        data : [
            { text : "German Shepherd", uri: "https://www.perfectdogbreeds.com/wp-content/uploads/2020/04/German-Shepherd.jpg",  key: '1'},
            { text : "Pitbull", uri: "https://images.pexels.com/photos/5379723/pexels-photo-5379723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", key: '2'},
            { text : "Belgian Mallinois", uri: "https://www.sheknows.com/wp-content/uploads/2018/12/j5051usult5ji4nolud5.jpeg?w=1920", key: '3'},
            { text : "Husky", uri: "https://woofitszelda.com/wp-content/uploads/2021/09/husky-mix-2.jpg", key: '4'},
            { text : "Golden Retriever", uri: "https://i.shgcdn.com/148dc4ae-078b-4962-a7ba-70b75be8df4e/-/format/auto/-/preview/3000x3000/-/quality/lighter/ ", key: '5'},
            { text : "Chihuahua", uri: "https://images.prismic.io/trustedhousesitters/43da5e47-8d31-44c1-bcda-0c6226dfbeed_chihuahua-1.jpeg?auto=compress,format&rect=0,0,1200,800&w=480&h=320", key: '6'},
            { text : "Great Dane", uri: "https://www.petful.com/wp-content/uploads/2012/01/great-dane-2-750x644.jpg", key: '7'},
            { text : "Bernese Mountain Dog", uri: "https://i.pinimg.com/originals/33/d9/be/33d9be3f57fafa6a7abc4c41022e1f57.jpg", key: '8'},
            { text : "Golden Doodle", uri: "https://www.rover.com/blog/wp-content/uploads/2021/06/groverdood-1024x768.jpg ", key: '9'},
            { text : "Labrador Retriever", uri: "https://images.wideopenpets.com/wp-content/uploads/2019/10/Labrador-Retrievers-1056x704.png ", key: '10'},
            { text : "French Bulldog", uri: "https://www.frenchbulldogbreed.net/wp-content/uploads/2018/06/French-bulldog-puppy-for-sale-Toby-02-1.jpg ", key: '11'},
            { text : "Austrailian Shepherd", uri: "https://assets.orvis.com/is/image/orvisprd/australian-shepherd?wid=1023&src=is($object$:7-3)", key: '12'},
            { text : "Rottweiler", uri: "https://woofspedia.com/wp-content/uploads/2021/10/shutterstock_1707420238-750x500.jpg ", key: '13'},
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
        borderColor : '#000000',
      },

      itemText: {
        textAlign: "center",
        color: '#121212',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
      },
    

});