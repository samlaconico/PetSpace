import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, FlatList, SafeAreaView, SectionList, Button, Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('pet-space/assets/background.jpg')} resizeMode="cover" imageStyle={styles.bgImage} style={styles.main}>
      <View style={styles.main}>
        <StatusBar style="light" />
          <SafeAreaView style={{ flex: 1, marginTop: 10, marginTop: 95}}>
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
                    renderItem={({ item }) => <ListItem item={item}/>}
                    showsHorizontalScrollIndicator={false}
                  />
                </>
              )}
              renderItem={({ item, section }) => {
                return null;
                return <ListItem item={item} />;
              }}
            />

            
          </SafeAreaView>
          <View style={{flex : 3.3}}>
            <Text style={{fontSize: 30, fontWeightight: "bold", paddingBottom: 12, alignSelf: "center"}}>Breed Info</Text>
              
              <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
              <Pressable onPress={() => Alert.alert('Left button pressed')}style={{width: 100, height: 46, backgroundColor: "#FFFFFF", alignItems: "center", borderRadius: 6, marginHorizontal: 20, borderWidth: 3}}>
                <Text style={{fontSize:30,}}>Dogs</Text>
              </Pressable>
              <Pressable style={{width: 100, height: 46, backgroundColor: "#FFFFFF", alignItems: "center", borderRadius: 6, marginHorizontal: 20, borderWidth: 3}}>
                <Text style={{fontSize:30}}>Cats</Text>
              </Pressable>
              </View>

          </View>
        </View>
    </ImageBackground>
  );
}

const ListItem = ({ item }) => {
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

const ArticleItem = ({article}) => {
  return <View style={styles.article}>
    <Image source={{}} style={styles.articlePhoto} resizeMode="cover"/>
    <Text style={styles.articlePhoto}>{article.text}</Text>
  </View>
}

const SECTIONS = [
  {
    title: 'Made for you',
    horizontal: 'true',
    data: [
      {
        key: '1',
        text: '1 mile away',
        uri: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
      },
      {
        key: '2',
        text: '4 miles away',
        uri: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
      },

      {
        key: '3',
        text: '6 miles away',
        uri: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg',
      },
      {
        key: '4',
        text: '1 mile away',
        uri: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg',
      },
      {
        key: '5',
        text: '3 miles away',
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
});