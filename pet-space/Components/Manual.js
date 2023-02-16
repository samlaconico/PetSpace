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
    //dog breeds
    { name: "German Shepherd", text : "Life Expectancy: 9-13 years\nSize: L \n Diet: Animal-based protein sources (High in fat, vitamins, and minerals) \n Grooming maintenance: Brushed 3-4 times a week , Bath every 3-4 months(No overbathing) \n Exercise Needed: At least 2 hours a day", uri: "https://www.perfectdogbreeds.com/wp-content/uploads/2020/04/German-Shepherd.jpg",  key: '1'},
    { name: "Pitbull", text : "Life Expectancy : 12-14 years \n Size: M \n Weight: (M) 35-60 lbs (F) 30-50 lbs \n Diet: Animal-based protein sources (High in fat, vitamins, and minerals)\nGrooming maintenance: Brushed once weekly, Bathed once every month to 6 months \n Exercise Needed: 30-45 minutes daily", uri: "https://images.pexels.com/photos/5379723/pexels-photo-5379723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", key: '2' }  ,
    { name : "Belgian Mallinois", text : "Life Expectancy : 10-14 years \n Size: M-L \n Weight: (M) 55-66 lbs (F) 44-55 lbs \n Diet: Animal-based protein (higher amounts of protein atleast 10% fat) \n Grooming maintenance: Brushes once a week, Bathed every week up to 6 weeks \n Exercise Needed: 60-90 minutes a day ", uri: "https://www.sheknows.com/wp-content/uploads/2018/12/j5051usult5ji4nolud5.jpeg?w=1920", key: '3'},
    { name : "Husky", text : "Life Expectancy : 12-14 years  \n Size: M \n Weight: (M) 44-60 lbs (F) 35-51 lbs \n Diet: High quality protein  \n Grooming maintenance: At least once a week , Bathed every 6 weeks \n Exercise Needed: min 2 hours of exercise daily " , uri: "https://woofitszelda.com/wp-content/uploads/2021/09/husky-mix-2.jpg", key: '4'},
    { name : "Golden Retriever", text : "Life Expectancy : 10-12 years  \n Size: M-L \n Weight: (M) 65-75 lbs (F) 55-60) lbs \n Diet: Meat proteins, wheats, vegetables  \n Grooming maintenance: Brushes daily , Bathed once a month \n Exercise Needed: A few walks a day " , uri: "https://i.shgcdn.com/148dc4ae-078b-4962-a7ba-70b75be8df4e/-/format/auto/-/preview/3000x3000/-/quality/lighter/ ", key: '5'},
    { name : "Chihuahua", text : "Life Expectancy : 12-20 years  \n Size: S \n Weight: (M) 5-7 lbs. (F) 6-8 lbs. \n Diet: Muscle meat, organs, eggs, vegetables, fruits \n Grooming maintenance: Brushed once a week, \n Exercise Needed:  fifteen minutes of movement twice a day " , uri: "https://images.prismic.io/trustedhousesitters/43da5e47-8d31-44c1-bcda-0c6226dfbeed_chihuahua-1.jpeg?auto=compress,format&rect=0,0,1200,800&w=480&h=320", key: '6'},
    { name : "Great Dane", text : "Life Expectancy : 6-8 years  \n Size: L \n Weight: (M) 120-200 lbs (F) 99-130 lbs \n Diet: (Smaller portion meals) Meat, fish, poultry) Moderate animal-based fat content  \n Grooming maintenance: Weekly brushing  \n Exercise Needed: Daily walks (nothing extreme)" , uri: "https://www.petful.com/wp-content/uploads/2012/01/great-dane-2-750x644.jpg", key: '7'},
    { name : "Bernese Mountain Dog", text : "Life Expectancy : 7-10 years  \n Size: L \n Weight: (M) 80-115 (F) 70-95 \n Diet: Low protein level, moderate fat content  \n Grooming maintenance: Weekly brushing, Bath once a month  \n Exercise Needed: 30 moderate exercise daily " , uri: "https://i.pinimg.com/originals/33/d9/be/33d9be3f57fafa6a7abc4c41022e1f57.jpg", key: '8'},
    { name : "Golden Doodle", text : "Life Expectancy : 10-15 years  \n Size: M \n Weight: (M) 65-75 lbs. (F) 55-65 lbs.  \n Diet: High protein meat  \n Grooming maintenance: Once a month  \n Exercise Needed: 2 hours daily " , uri: "https://www.rover.com/blog/wp-content/uploads/2021/06/groverdood-1024x768.jpg ", key: '9'},
    { name : "Labrador Retriever", text : "Life Expectancy : 10-12 years \n Size: M-L\n Weight: (M) 64-79 lbs. (F) 55-77 lbs. \n Diet: Multi-protein \n Grooming maintenance: Brush once a week, Bath once every 4-6 weeks \n Exercise Needed: 45 mins-1.5 hours daily " , uri: "https://images.wideopenpets.com/wp-content/uploads/2019/10/Labrador-Retrievers-1056x704.png ", key: '10'},
    { name : "French Bulldog", text : "Life Expectancy : 10-14 years \n Size: S \n Weight: (M) 20-28 lbs. (F) 17-24 lbs. \n Diet: Animal Protien meat and fish \n Grooming maintenance: weekly brushing, Bath once a month \n Exercise Needed: 1 hour daily  " , uri: "https://www.frenchbulldogbreed.net/wp-content/uploads/2018/06/French-bulldog-puppy-for-sale-Toby-02-1.jpg ", key: '11'},
    { name : "Austrailian Shepherd", text : "Life Expectancy : 13-15 years  \n Size: M  \n Weight: (M) 55-70 lbs (F) 35-55 lbs  \n Diet: High protein and fat  \n Grooming maintenance: Brush 1-3 times weekly, Bath every few months  \n Exercise Needed: 2 hours daily " , uri: "https://assets.orvis.com/is/image/orvisprd/australian-shepherd?wid=1023&src=is($object$:7-3)", key: '12'},
    { name : "Rottweiler", text : "Life Expectancy : 9-10 years  \n Size: M-L \n Weight: (M) 110-132 lbs (F) 77-105 lbs  \n Diet: Protein (chicken, turkey, lamb, herring) \n Grooming maintenance: Brush once a week, Bath every 2-8 weeks  \n Exercise Needed: 45-60 minutes daily " , uri: "https://woofspedia.com/wp-content/uploads/2021/10/shutterstock_1707420238-750x500.jpg ", key: '13'},
    
    //cat breeds
    { name : "Ragdoll", text: "Life Expectancy: 13-18 years  \n Size: L  \n Weight: 12-20 lbs.  \n Diet: High protein, low carb(50% animal proteins, about 20% fats, and no more than 3% carbs)  \n Grooming Maintenance: brushing the coat at least twice a week  \nExercise Needed: Low Exercise", uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Ragdoll.jpg?itok=uoJljrty",  key: '14'},
    { name : "Maine Coon", text: "Life Expectancy: 12.5 years or up to 15 years  \n Size: XL  \n Weight: 13-18 lbs.  \n Diet: Between 190-875 calories a day to thrive, with 85% muscle meat  \n Grooming Maintenance: Brush two to three times per week, removing any loose hair and dander (flakes of dead skin) and keeping coat clean, healthy, and free of knots  \n Exercise Needed: 20 to 30 minutes of exercise every day", uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Maine-Coon-Cat.jpg?itok=XrHCK4xn", key: '15'},
    { name : "Persian", text: "Life Expectancy: 12-17 years  \n Size: M  \n Weight: 7-12 lbs.  \nDiet: Recommended hairball food due to their coat. High Protein and low fat.  \n Grooming Maintenance: Bathe once or twice a month, daily brushing, constantly wipe their face due to their flat facial structure  \n Exercise Needed: Play with them vigorously for 15 minutes twice a day prior to feeding them.", uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Persian-Long-Hair.jpg?itok=OEork2Dh", key: '16'},
    { name : "British Shorthair", text: "Life Expectancy: 14 to 20 years  \n Size: M to L  \n Weight: 7-17  \n Diet: High in protein and moderate when it comes to fat and carbohydrates.  \n Grooming Maintenance: Brush once or twice a week with a metal-tooth comb or rubber brush to help remove loose hair. Daily brushing during shedding season.  \n Exercise Needed: Not very hyper or active, occasional playing", uri: "https://excitedcats.com/wp-content/uploads/2020/12/British-Shorthair-cat_Shutterstock_PHOTOCREO-Michal-Bednarek.jpg", key: '17'},
    { name : "Abyssinian", text: "Life Expectancy: 9-15 years.  \n Size: M  \n Weight: 6-10 lbs.  \n Diet: High protein, made with whole meat  \n Grooming Maintenance: Groom weekly with a stainless steel comb to remove dead hair and keep coat shiny  \n Exercise Needed: Generally active, needing a lot of amusement.", uri: "https://www.purina.co.uk/sites/default/files/2022-06/Abyssinian-Cat-Breed_0.jpg?itok=r3GCHbzx", key: '18'},
    { name : "American Shorthair", text: "Life Expectancy: 15-20 years  \n Size: M  \n Weight: 6-15 lbs.   \n Diet: Quality protein, consisting mostly of meat    \n Grooming Maintenance: Brushing/combed at least 2 times a week   \n Exercise Needed: Moderate exercise, daily play time sessions ", uri: "https://media.kidadl.com/Purrrfect_Facts_About_The_American_Shorthair_Cat_Kids_Will_Love_d62617998c.jpg", key: '19'},
    { name : "Scottish Fold", text: "Life Expectancy: 11-15 years    \n Size: M  \n Weight: 6-13 lbs.  \n Diet: Meat, poultry, or fish, also needs fat (omega 3)   \n Grooming Maintenance: Brush with steel comb 1-2 times weekly  \n Exercise Needed: Daily exercise with mental stimulation ", uri: "https://allaboutcats.com/wp-content/uploads/2020/10/the-Scottish-Fold-cat.jpg", key: '20'},
    { name : "Sphynx", text: "Life Expectancy: 8-14 years   \n Size: M  \n Weight: 6-12 lbs.  \n Diet: Lean meat (chicken, turkey, tuna, salmon, shrimp)  \n Grooming Maintenance: No brushing required, Bathing once a week  \n Exercise Needed: Daily mental stimulation ", uri: "https://img.cutenesscdn.com/375/cme-data/getty/2b6b4c0c3c7e41db858c525787b832bd.jpg", key: '21'},
    { name : "Siamese", text: "Life Expectancy: 15-20 years   \n Size: M  \n Weight: 8-15 lbs.  \n Diet: Turkey and cooked ham, protein(chicken, beef, lamb, eggs, and fish)   \n Grooming Maintenance: Don't require lot of grooming, brush once a week   \n Exercise Needed: Various activities mental and physical ", uri: "https://images.ctfassets.net/s7r1h98f1v8b/5aDOPOV4ic3iZDdYMyM9tk/919476d390a2a81644a8ceedeb3b1f9f/thai_siamese_cat_breed.jpg", key: '22'},
    { name : "Bengal", text: "Life Expectancy: 12-16 years   \n Size: M-L  \n Weight: 8-15 lbs.  \n Diet: High protein mainly from meat   \n Grooming Maintenance: Low maintenance, grooming once a week   \n Exercise Needed: Daily exercise with interactive toys, climbing, scratch posts ", uri: "https://allaboutcats.com/wp-content/uploads/2020/10/Bengal.jpg", key: '23'},
    { name : "Siberian", text: "Life Expectancy: 12-15 years   \n Size: M-L  \n Weight: 15-20 lbs.  \n Diet: High protein   \n Grooming Maintenance: Weekly brushing   \n Exercise Needed: Daily physical and mental exercise ", uri: "https://cf.ltkcdn.net/cats/cat-breeds/images/orig/325227-1877x1251-siberian-cat.jpg", key: '24'},
    { name : "Birman", text: "Life Expectancy: 9-13 years   \n Size: M  \n Weight: 7-15 lbs.  \n Diet: Cooked fish and chicken, raw chicken bones  \n Grooming Maintenance: Low maintenance   \n Exercise Needed: Weekly or occasional brushing ", uri: "https://dinoanimals.com/wp-content/uploads/2021/01/Birman-cat-1.jpg", key: '25'},
    { name : "Russian Blue", text: "Life Expectancy: 15-20 years   \n Size: M  \n Weight: 7-15 lbs.  \n Diet: Animal protein, Fats in fish, chicken, turkey   \n Grooming Maintenance: Brushing needed weekly   \n Exercise Needed: Spend energy playing by themselves, helpful to keep around toys around the house ", uri: "https://www.petplace.com/static/5b0e77c42271ed6918a3fae4b808f356/98569/AdobeStock_112943750.jpg", key: '26'},
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