import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaTyGNrPbfmQ8oiK9XlPlbfZ3huSGrlGw",
    authDomain: "crwn-db-5dfc4.firebaseapp.com",
    databaseURL: "https://crwn-db-5dfc4.firebaseio.com",
    projectId: "crwn-db-5dfc4",
    storageBucket: "crwn-db-5dfc4.appspot.com",
    messagingSenderId: "728256944185",
    appId: "1:728256944185:web:777037dad1f628575415e8",
    measurementId: "G-CGNKVJXX33"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;