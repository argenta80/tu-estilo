// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgrjs9ovbpXB1bKTw4WpMTP-uFe1qXih0",
    authDomain: "tu-estilo-coder-hose.firebaseapp.com",
    projectId: "tu-estilo-coder-hose",
    storageBucket: "tu-estilo-coder-hose.appspot.com",
    messagingSenderId: "109362690724",
    appId: "1:109362690724:web:9b581574d59cf6057c8431"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();