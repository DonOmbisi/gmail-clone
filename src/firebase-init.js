// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVqU2bmps_QaY9v55SUJtqESaAoW1-A64",
  authDomain: "clone-e86e8.firebaseapp.com",
  projectId: "clone-e86e8",
  storageBucket: "clone-e86e8.appspot.com",
  messagingSenderId: "1055819593993",
  appId: "1:1055819593993:web:0e19f87118f7ec3da0fbd8",
  measurementId: "G-ESSBHED5B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }