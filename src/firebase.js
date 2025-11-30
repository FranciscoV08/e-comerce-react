// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuDWE8rxB2u3Ds6802O2uEqaiGezmCNi4",
  authDomain: "proyectcoder.firebaseapp.com",
  projectId: "proyectcoder",
  storageBucket: "proyectcoder.firebasestorage.app",
  messagingSenderId: "899123816264",
  appId: "1:899123816264:web:23b8f5c56925791cf0f57d",
  measurementId: "G-28YFNC1Y4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Utilizamos la app 
export const dbFire = getFirestore(app);