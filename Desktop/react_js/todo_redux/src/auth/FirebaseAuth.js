import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDkZrQDDz8CS17qD7jc3IdIYwwPA5XKMZw",
    authDomain: "react-with-firebase-75c2d.firebaseapp.com",
    projectId: "react-with-firebase-75c2d",
    storageBucket: "react-with-firebase-75c2d.appspot.com",
    messagingSenderId: "761043356033",
    appId: "1:761043356033:web:7581fdfc42383e411b8080",
    measurementId: "G-F3LYSJTNYR"
  };

// initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth= firebase.auth()
const db= firebase.firestore()
const databaseRef = firebase.database().ref();
const todosRef = databaseRef.child("todos")
export {fire,auth,db, databaseRef, todosRef};