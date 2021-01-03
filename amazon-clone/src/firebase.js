import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaSyRUba247biIj8H3ZD0SPlpFFSBtSJE",
    authDomain: "clone-50789.firebaseapp.com",
    projectId: "clone-50789",
    storageBucket: "clone-50789.appspot.com",
    messagingSenderId: "651533257019",
    appId: "1:651533257019:web:98a87541a50ff536634f1e",
    measurementId: "G-QJT4S3SCVT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};