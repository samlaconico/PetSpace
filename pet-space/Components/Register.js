import React,{useState} from 'react';
import {
    TextInput,
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { authentication } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from '../firebase/auth';

const [isSignedIn,setIsSignedIn] = useState(false);
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const RegisterUser = ()=>{
    createUserWithEmailAndPassword(authentication,email,password)
    .then((re)=>{
        console.log(re);
    })
    .catch((re)=>{
        console.log(re);
    })

return (

<View style ={styles.container}>
    <TextInput
    style={styles.inputStyle} 
    placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>
    <TextInput 
    style={styles.inputStyle}
    placeholder='Pass' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
    <Button title='Register' onPress={RegisterUser}/>
</View>
);
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }

});