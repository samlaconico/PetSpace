import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, FlatList, SafeAreaView, SectionList, Button, Pressable, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" imageStyle={styles.bgImage} style={styles.main}>
      <View style={styles.main}>
        <StatusBar style="light" />
          <SafeAreaView style={{ flex: 3, marginTop: 10, marginTop: 95}}>
            <SectionList
              contentContainerStyle={{ paddingHorizontal: 10 }}
              stickySectionHeadersEnabled={false}
              sections={SECTIONS}
              scrollEnabled={false}
              renderSectionHeader={({ section }) => (
                <>
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <HeaderItem item={item} navigation={navigation}/>}
                    showsHorizontalScrollIndicator={false}
                  />
                </>
              )}
              renderItem={({ item, section }) => {
                return null;
                return <HeaderItem item={item} />;
              }}
            />
          </SafeAreaView>

          <View style={{flex : 2.5}}>
            <Text style={{fontSize: 30, fontWeightight: "bold", paddingBottom: 12, alignSelf: "center"}}>Breed Info</Text>
              <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
              <Pressable onPress={() => navigation.navigate('DogBreedsScreen')}style={{width: 100, height: 46, backgroundColor: "#FFFFFF", alignItems: "center", borderRadius: 6, marginHorizontal: 20, borderWidth: 3}}>
                <Text style={{fontSize:30,}}>Dogs</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('CatBreedsScreen')} style={{width: 100, height: 46, backgroundColor: "#FFFFFF", alignItems: "center", borderRadius: 6, marginHorizontal: 20, borderWidth: 3}}>
                <Text style={{fontSize:30}}>Cats</Text>
              </Pressable>
              </View>
          </View>

          <View style={{flex: 7, flexDirection:"row"}}>
          <SafeAreaView style={{ flex: 7,}}>
            <FlatList
              data={ARTICLESLEFT}
              renderItem={({ item }) => <ArticleItem article={item}/>}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </SafeAreaView>

          <SafeAreaView style={{ flex: 7,}}>
            <FlatList
              data={ARTICLESRIGHT}
              renderItem={({ item }) => <ArticleItem article={item}/>}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </SafeAreaView>
          </View>

        </View>
    </ImageBackground>
  );
}

function findElement(array, title) {
  return array.find((element) => {
    return element.key === title;
  })
}

const navigateTo = (navigation, key, name, img, text) => {
  navigation.navigate("PetProfile", {key, name, img, text});
}

//header component (for scrolling list of dogs)
const HeaderItem = ({ item, navigation }) => {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => navigateTo(navigation, item.key, item.name, item.uri, item.text)}>
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

//article component 
const ArticleItem = ({article}) => {
  return <View style={styles.article}>
    <Pressable onPress={() => Alert.alert('Left button pressed')}>
      <Image source={{uri: article.uri}} style={styles.articlePhoto} resizeMode="cover"/>
      <Text style={styles.articleText}>{article.title}</Text>
    </Pressable>
  </View>
}

//articles on left row
const ARTICLESLEFT = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Dog Proofing Home in 30 Seconds",
    uri: 'https://previews.123rf.com/images/damedeeso/damedeeso1209/damedeeso120900010/15377316-dog-welcome-home-on-brown-mat.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: "Changing your Pups Food in 30 Seconds",
    uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/feeding-dog-1638177317.jpg',
  }
]

//articles on right row
const ARTICLESRIGHT= [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Changing Name in 30 Seconds",
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkjbUUqexvrrJJxm2qEzXYFxPD41al86kAS-PZUZQ3LJMcn9VWzTYJ2MVpxCgPvMQtQ8&usqp=CAU',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: "Raising a Good Dog in 60 Seconds",
    uri: 'https://www.bil-jac.com/media/2sxlmg0n/typeofeater-image.jpg?anchor=center&mode=crop&width=1024&height=512',
  }
]

//header list
const SECTIONS = [
  {
    title: 'Made for you',
    horizontal: 'true',
    data: [
      {
        key: '1',
        text: '1 mile away',
        name: 'Rocket',
        uri: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
      },
      {
        key: '2',
        text: '4 miles away',
        name: 'Vincent',
        uri: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
      },

      {
        key: '3',
        text: '6 miles away',
        name: 'Molly',
        uri: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg',
      },
      {
        key: '4',
        text: '1 mile away',
        name: 'Cooper',
        uri: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg',
      },
      {
        key: '5',
        text: '3 miles away',
        name: 'Allie',
        uri: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
      },
    ],
  },
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
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 11,
  },
  itemText: {
    textAlign: "center",
    color: '#121212',
    marginTop: 5,
    fontWeight: 'bold',
  },
  articlePhoto: {
    width: 150,
    height: 100,
    borderRadius: 11,
    padding: 5,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  }, 
  articleText: {
    padding: 5,
    textAlign: "center",
    fontWeight: '800',
    fontSize: 18,
  },
  article: {
    padding: 2,
  }
});