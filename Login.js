import React,{useState,useEffect} from "react";
import { KeyboardAvoidingView,StyleSheet,Text,TextInput,TouchableOpacity,View } from "react-native";
import { authentication} from "../firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigation = useNavigation()
    useEffect(()=>{
        const unsubscribe = authentication.onAuthStateChanged(user=>{
            if(user){
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    },[])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
            console.log(re);
        })
        .catch(error=>alert(error.message))
    }
    const handleSignIn = () => {
        signInWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
            console.log(re);
        })
        .catch(error=>alert(error.message))
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style ={styles.inputContainer}>
                <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={text=>setEmail(text)}
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={text=>setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button,styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>

                </TouchableOpacity>


            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    inputContainer: {
        width:'80%'
    },
        input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer: {
        width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding:15,
        borderRadius:10,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop:5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,

    },
})