// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAFhs9AxtveoMEOGAFEYm3VokDcHV8WuzA",
    authDomain: "vue-chat-456fb.firebaseapp.com",
    projectId: "vue-chat-456fb",
    storageBucket: "vue-chat-456fb.appspot.com",
    messagingSenderId: "118397559340",
    appId: "1:118397559340:web:3e4cef9e5cfa2a6ab16789"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  export default firebase;