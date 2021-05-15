import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0jjiThnvhy_dIyqcB-6LVacBTC1c7uBk",
  authDomain: "socialmediawebsite-3f9e8.firebaseapp.com",
  projectId: "socialmediawebsite-3f9e8",
  storageBucket: "socialmediawebsite-3f9e8.appspot.com",
  messagingSenderId: "303859001777",
  appId: "1:303859001777:web:7d4df0b1a2d1c24334f590",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
