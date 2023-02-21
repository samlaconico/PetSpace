// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY5KxTDO7rmQtlEuN0agGSGjNhnv8pfiI",
  authDomain: "petspace-26021.firebaseapp.com",
  projectId: "petspace-26021",
  storageBucket: "petspace-26021.appspot.com",
  messagingSenderId: "580177628671",
  appId: "1:580177628671:web:91a2c18d0e923ed4022bca",
  measurementId: "G-S26KEJ9RXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
export {auth}