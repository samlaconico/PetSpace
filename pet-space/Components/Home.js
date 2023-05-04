import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View, FlatList, SafeAreaView, SectionList, Button, Pressable, Alert, Linking } from 'react-native';


//import { StyleSheet,Text,View } from "react-native";
//import { HomeScreen } from "./Home";

export function HomeScreen({navigation}) {
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
              scrollEnabled={true}
            />
          </SafeAreaView>

          <SafeAreaView style={{ flex: 7,}}>
            <FlatList
              data={ARTICLESRIGHT}
              renderItem={({ item }) => <ArticleItem article={item}/>}
              keyExtractor={item => item.id}
              scrollEnabled={true}
            />
          </SafeAreaView>
          </View>

        </View>
    </ImageBackground>
    )
}
//header component (for scrolling list of dogs)
const HeaderItem = ({ item, navigation }) => {
    return (
      <View style={styles.item}>
        <Pressable onPress={() => navigation.navigate('PetProfile', {name: item.name, img: item.uri, text: item.description})}>
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
      <Pressable onPress={() => Linking.openURL(article.link)}>
        <Image source={{uri: article.uri}} style={styles.articlePhoto} resizeMode="cover"/>
        <Text style={styles.articleText}>{article.title}</Text>
      </Pressable>
    </View>
  }
  
  //articles on left row
  const ARTICLESLEFT = [
    {
      title: "New Dog Owner? Here's Some Helpful Tips",
      uri: 'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg',
      link: 'https://www.petsbest.com/dog-owners-guide',
    },
    {
      title: "Cost of Dog Parenthood",
      uri: 'https://www.gannett-cdn.com/-mm-/8fb75d799eae407e7c9d69b7915db250037db2e2/c=292-507-3362-2242/local/-/media/2016/08/11/USATODAY/USATODAY/636065429132406714-ThinkstockPhotos-482420873.jpg',
      link: 'https://www.rover.com/blog/cost-of-dog-parenthood/',
    },
    {
      title: "Dog Training 101",
      uri: 'https://lifeisdogpetcare.com/wp-content/uploads/2022/04/Tricks-picture.jpeg',
      link: 'https://www.thesprucepets.com/steps-to-train-your-dog-1118273',
    },
    {
      title: "Dog Grooming",
      uri: 'https://i.guim.co.uk/img/media/67cafe0802bbca347130f7ad219b3bee96e72199/0_693_3570_2141/master/3570.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ae0c4c999daf990c2d793d8a7bcc6270',
      link: 'https://www.akc.org/expert-advice/health/how-to-groom-a-dog/',
    },
    {
      title: "Needed Exercise for Dogs",
      uri: 'https://media-be.chewy.com/wp-content/uploads/2017/07/13150908/dog_exercise_hero.jpg',
      link: 'https://fairmountpetservice.com/Blog/pet-services-blog/dog-walking/dog-exercise-needs-breed-guide-chart/',
    },
    {
      title: "Signs to Call Vet: Dog",
      uri: 'https://www.forbes.com/advisor/wp-content/uploads/2023/02/dog-at-vet-visit.jpeg-900x510.jpg',
      link: 'https://www.akc.org/expert-advice/health/should-i-call-my-dogs-vet/',
    },
  ]
  
  //articles on right row
  const ARTICLESRIGHT= [
    {
      title: "New Cat Owner? Here's Some Helpful Tips",
      uri: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
      link: 'https://www.petsbest.com/cat-owners-guide',
    },
    {
      title: "Cost of Cat Parenthood",
      uri: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/0518-finance-cat-money_kya8zf.jpg',
      link: 'https://www.rover.com/blog/cost-of-cat-parenthood/'
    },
    {
      title: "Cat Training 101",
      uri: 'https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/HighFive08370.jpg',
      link: 'https://www.pumpkin.care/blog/how-to-train-a-cat/',
    },
    {
      title: "Cat Grooming",
      uri: 'https://luckydawgsalongrooming.com/wp-content/uploads/2018/04/cat-grooming-services.jpeg',
      link: 'https://www.aspca.org/pet-care/cat-care/cat-grooming-tips#:~:text=Work%20along%20the%20lie%20of,on%20cats%20with%20short%20fur',
    },
    {
      title: "Needed Exercise for Cats",
      uri: 'https://d.newsweek.com/en/full/2022045/kitten-playing-wand-toy.jpg',
      link: 'https://www.petmd.com/cat/wellness/evr_ct_exercising_with_your_cat_a_how_to_guide',
    },
    {
      title: "Signs to Call Vet: Cat",
      uri: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-48672-800.jpg',
      link: 'https://www.petcarerx.com/article/when-to-take-a-cat-to-the-vet/786',
    },
  ]
  
  //header list
  const SECTIONS = [
    {
      title: 'Made for you',
      horizontal: 'true',
      data: [
        {
          key: '1',
          name: 'Clifford',
          text: '1 mile away',
          uri: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
          description: 'very nice boy click here to email'
        },
        {
          key: '2',
          name: 'Ace',
          text: '4 miles away',
          uri: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
          description: 'very nice boy click here to email'
        },
  
        {
          key: '3',
          name: 'Chad',
          text: '6 miles away',
          uri: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg',
          description: 'very nice boy click here to email'
        },
        {
          key: '4',
          name: 'King',
          text: '1 mile away',
          uri: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg',
          description: 'very nice boy click here to email'
        },
        {
          key: '5',
          name: 'Bear',
          text: '3 miles away',
          uri: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
          description: 'very nice boy click here to email'
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

export default HomeScreen

