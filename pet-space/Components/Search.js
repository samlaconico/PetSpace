import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { render } from 'react-dom';

// SearchScreen component definition
export function SearchScreen() {
  // State to store the current region of the map
  const [mapRegion, setMapRegion] = useState(null);
  
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
          longitudeDelta: 0.0922,
          latitudeDelta: 0.0421
        });
      } catch (error) {
        console.log(error);
        // If an error occurs, try again to get the user's location
        (async () => {
          let location = await Location.getCurrentPositionAsync({});
          setMapRegion({ 
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            longitudeDelta: 0.0922,
            latitudeDelta: 0.0421
          });
        })();
      }
    })();
  });
  
  // Render the component
  return (
    <View style={styles.container}>
      {/* Search button component */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Pet Shelter Search</Text>
      </TouchableOpacity>
      {/* Map component */}
      <MapView 
               style={styles.map} 
               region={mapRegion}
               // show user's current location on the map
               showsUserLocation={true}
               // show the My Location button on the map
               showsMyLocationButton={true}
      >
  
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
});