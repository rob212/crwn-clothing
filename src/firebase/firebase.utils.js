import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDNqQbr-3whXW4gtgvQpqZfZ7OA4LUSIsM",
    authDomain: "crwn-db-55d99.firebaseapp.com",
    databaseURL: "https://crwn-db-55d99.firebaseio.com",
    projectId: "crwn-db-55d99",
    storageBucket: "crwn-db-55d99.appspot.com",
    messagingSenderId: "1001452703088",
    appId: "1:1001452703088:web:31881c01c6b02dd06f53b5",
    measurementId: "G-V919SPXCLK"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;