import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

const AccountInformation = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ImageBackground source={require('../assets/background.jpg')} imageStyle={styles.bgImage} resizeMode="cover" style={styles.main}>
      <View style={styles.container}>
      <Text style={styles.accInfoHeaderText}>ACCOUNT INFORMATION</Text>
        <Text style={styles.personalHeaderText}>Personal:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Middle Initial:</Text>
          <TextInput
            style={styles.input}
            value={middleInitial}
            onChangeText={setMiddleInitial}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity style={styles.appButtons} 
           onPress={() => alert('Edit pressed')}>
            <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 0,
  },
  accInfoHeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: 'white',
    //backgroundColor: '#ECE4DC',
    borderWidth: 1,
    borderRadius: 5,
  },
  //FIGURE OUT HOW TO MAKE BACKGROUND COLOR ROUNDED
  personalHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 20,
    //backgroundColor: '#ECE4DC',
  },
  applicationHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    //backgroundColor: 'white',
  },
  label: {
    flex: 1,
    fontSize: 14,
    marginRight: 5,
    fontWeight: 'bold',
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  appButtons: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export { AccountInformation };
