// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd5YxhVxX5CysJJm-hyOufHd_drS8jReo",
  authDomain: "cursor-1257b.firebaseapp.com",
  projectId: "cursor-1257b",
  storageBucket: "cursor-1257b.appspot.com",
  messagingSenderId: "164012065099",
  appId: "1:164012065099:web:f2e2dcea99f5f64337e8ce"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );