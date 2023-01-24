import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAIGIlYCnHbxGXgkPasGM3XGbQStFUjQXo",
    authDomain: "netflix-clone-8d9b0.firebaseapp.com",
    projectId: "netflix-clone-8d9b0",
    storageBucket: "netflix-clone-8d9b0.appspot.com",
    messagingSenderId: "288895140389",
    appId: "1:288895140389:web:60108ef74159ddf49fb5cc",
    measurementId: "G-LLF429P5JX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();

  export { auth, db };