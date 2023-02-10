import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountInformation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account Information Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
});

export { AccountInformation };