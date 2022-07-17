// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import auth for autorization
import "firebase/compat/auth"
// this for database
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBW_-u-eLtEeaGzJfvXz8vX2QQfPkj_E",
  authDomain: "myshop-79a71.firebaseapp.com",
  projectId: "myshop-79a71",
  storageBucket: "myshop-79a71.appspot.com",
  messagingSenderId: "617264022735",
  appId: "1:617264022735:web:d7a06baa7f15056fd763ba",
  measurementId: "G-GDD2PYH2QW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

export {auth, app}
export default db;