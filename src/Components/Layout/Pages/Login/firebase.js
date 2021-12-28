import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBislWG9KWGS1MLuJJGO3anno5muOLMTE8",
  authDomain: "tomatomanloginapp.firebaseapp.com",
  projectId: "tomatomanloginapp",
  storageBucket: "tomatomanloginapp.appspot.com",
  messagingSenderId: "572456147131",
  appId: "1:572456147131:web:ac2886d9c573110ab2719e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
