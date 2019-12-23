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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error creation user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;