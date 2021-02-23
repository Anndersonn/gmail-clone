import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFGmm4KHKqhXgKA7F9QOBZ-eT-Wr98ItY",
    authDomain: "clone-e2445.firebaseapp.com",
    projectId: "clone-e2445",
    storageBucket: "clone-e2445.appspot.com",
    messagingSenderId: "346620867637",
    appId: "1:346620867637:web:ee32aa7590be581602ed7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }