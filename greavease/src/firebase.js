// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAt9bo72rW2sf2vfFZpe-BKYUNaDjD43Dk",
  authDomain: "grievease-7e552.firebaseapp.com",
  projectId: "grievease-7e552",
  storageBucket: "grievease-7e552.appspot.com",
  messagingSenderId: "648320188192",
  appId: "1:648320188192:web:219fa91daf8f1996382145",
  measurementId: "G-24DDRGRHF6"
};

const app = initializeApp(firebaseConfig);
export const database  = getFirestore(app);
const auth = getAuth();
// auth.setPersistence('local');
export  {app , auth};