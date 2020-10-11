// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA7WFJU8I3vJA6OqfpO7lOfZwmEPFI_nV0",
    authDomain: "discord-26309.firebaseapp.com",
    databaseURL: "https://discord-26309.firebaseio.com",
    projectId: "discord-26309",
    storageBucket: "discord-26309.appspot.com",
    messagingSenderId: "555131959651",
    appId: "1:555131959651:web:5364e3a2315bc0ea5ebb56",
    measurementId: "G-E1Z4QGHDJX"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth , provider};
  export default db;