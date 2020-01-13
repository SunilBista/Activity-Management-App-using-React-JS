import firebase from 'firebase/app' //only core functions
import 'firebase/firestore' //Database
import 'firebase/auth' //Authentication

//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAlWlXWlAXHbFkxT2KJxzgOfsz2SZalkyk",
    authDomain: "activityproject-feed9.firebaseapp.com",
    databaseURL: "https://activityproject-feed9.firebaseio.com",
    projectId: "activityproject-feed9",
    storageBucket: "activityproject-feed9.appspot.com",
    messagingSenderId: "629548855595",
    appId: "1:629548855595:web:6dce27037aa8e6e922956e",
    measurementId: "G-KVJR7PEZL1"
  };
  firebase.initializeApp(firebaseConfig);
  //intialize Firestore
  firebase.firestore();


export default firebase;