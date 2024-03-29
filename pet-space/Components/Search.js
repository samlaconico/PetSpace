import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking, Pressable } from 'react-native';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { render } from 'react-dom';
import Modal from 'react-native-modal';

// SearchScreen component definition
export function SearchScreen() {
  // State to store the current region of the map
  const [mapRegion, setMapRegion] = useState(null);
  // State to store the pet shelters data
  const [petShelters, setPetShelters] = useState([]);

  
  // Use Effect hook to get the user's current location and set it as the map region
  useEffect(() => {
    (async () => {
      // Request permission to access the user's location
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      // If permission is not granted, display an error message and return
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      try {
        // Try to get the user's current location
        let location = await Location.getCurrentPositionAsync({});
        
        // If successful, set the region of the map to the user's location
        setMapRegion({ 
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          longitudeDelta: 1,
          latitudeDelta: 1
        });
      } catch (error) {
        console.log(error);
        // If an error occurs, try again to get the user's location
        (async () => {
          let location = await Location.getCurrentPositionAsync({});
          setMapRegion({ 
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            longitudeDelta: .09,
            latitudeDelta: .09
          });
        })();
      }
    })();
  });





  // Function to search for pet shelters
  const searchPetShelters = async () => {
    if (!mapRegion) {
      // Handle the case where the mapRegion is null
      return;
    }
  
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${mapRegion.latitude},${mapRegion.longitude}&radius=50000&keyword=pet+shelter&key=AIzaSyAbnDNnplvoEYpOLgPJhjoONIQPy5LknyM`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const fetchedShelters = data.results;
  
      const detailedShelters = await Promise.all(
        fetchedShelters.map(async (shelter) => {
          const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${shelter.place_id}&fields=name,formatted_phone_number,website,geometry&key=AIzaSyAbnDNnplvoEYpOLgPJhjoONIQPy5LknyM`;
  
          const detailsResponse = await fetch(detailsUrl);
          const detailsData = await detailsResponse.json();
  
          return {
            ...shelter,
            formatted_phone_number: detailsData.result.formatted_phone_number,
            website: detailsData.result.website,
          };
        })
      );
  
      setPetShelters(detailedShelters);
    } catch (error) {
      console.error(error);
    }
  };


  // Render the component
  return (
    <View style={styles.container}>
      {/* Search button component */}
      <TouchableOpacity style={styles.searchButton} onPress={searchPetShelters}>
  <Text style={styles.searchButtonText}>Pet Shelter Search</Text>
</TouchableOpacity>
      {/* Map component */}
      <MapView 
          provider = {PROVIDER_GOOGLE}
          style={styles.map} 
          region={mapRegion}
          // show user's current location on the map
          showsUserLocation={true}
          // show the My Location button on the map
          showsMyLocationButton={true}      
      >

    {petShelters.map((petShelter, index) => (
        <Marker 
          key={index}
          coordinate={{
          latitude: petShelter.geometry.location.lat,
          longitude: petShelter.geometry.location.lng
          }}
          onCalloutPress={() => this.calloutPress()}
        >
        <Callout onPress={() => Linking.openURL(petShelter.website)}>
          <View>
            <Text>{petShelter.name}</Text>
            <Text>{petShelter.vicinity}</Text>
            <Text style={styles.websiteText}>{petShelter.website}</Text>
          </View>
        </Callout>
      </Marker>
  ))} 

     </MapView>  
    </View>
  );
}

// Styles object to store the component's styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
  },
  searchButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  calloutTouchableText: {
    color: 'white',
    fontWeight: 'bold',
  },
  websiteText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});