import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth, firebase}