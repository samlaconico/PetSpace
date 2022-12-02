
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { render } from 'react-dom';

export function SearchScreen() {
  const [mapRegion, setMapRegion] = useState(null);
  
  useEffect(() => {
    (async () => {
      //requests the user for location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
       //locates the user's location
      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({ 
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421
      });
          console.log('location', location)

    })();
  }, []);
  
  return (
    <View style={styles.container}>
      <MapView 
               style={styles.map} 
               region={mapRegion}
          
               showsUserLocation={true}
               showsMyLocationButton={true}
      >
  
     </MapView>  
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


