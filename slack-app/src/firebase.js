
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC8S-qAdXllX97lnaP1leCNV3dPqCgLhtM",
    authDomain: "slack-app-1dbe4.firebaseapp.com",
    projectId: "slack-app-1dbe4",
    storageBucket: "slack-app-1dbe4.appspot.com",
    messagingSenderId: "152926879498",
    appId: "1:152926879498:web:960da1a3e9ee9306b7c4f3",
    measurementId: "G-ZER6LSEHHR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };