import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAk4TCcgWLes3jqq_nHqxQC6M5M33qxCI",
    authDomain: "crwn-db-1050e.firebaseapp.com",
    databaseURL: "https://crwn-db-1050e.firebaseio.com",
    projectId: "crwn-db-1050e",
    storageBucket: "crwn-db-1050e.appspot.com",
    messagingSenderId: "1011641019739",
    appId: "1:1011641019739:web:66aa84cfab87e6d046be7e",
    measurementId: "G-FNW8JQS710"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;