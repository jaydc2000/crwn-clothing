import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import {signInWithGoogle} from './../../firebase/compat/firebase.utils';


const config = {
    apiKey: "AIzaSyDQhFgBjVE5OdOG7WvGA33ph9nxe8JDc0g",
    authDomain: "crown-db-e5bfc.firebaseapp.com",
    projectId: "crown-db-e5bfc",
    storageBucket: "crown-db-e5bfc.appspot.com",
    messagingSenderId: "490869515557",
    appId: "1:490869515557:web:b2db873c244a08c5b326cc",
    measurementId: "G-21TR4YW99W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
