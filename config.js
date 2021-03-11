import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAWoOYmPy_d5JgzyesTMwbA-l7mkjjLSII",
  authDomain: "wily-app-4c029.firebaseapp.com",
  databaseURL: "https://wily-app-4c029.firebaseio.com",
  projectId: "wily-app-4c029",
  storageBucket: "wily-app-4c029.appspot.com",
  messagingSenderId: "762044502711",
  appId: "1:762044502711:web:3342e2b10905ed0df17332",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
