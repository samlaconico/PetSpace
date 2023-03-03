// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration

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
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);