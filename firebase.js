// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2tmnpmYDFmFOAtWUED0yLyux8Xy9hjC0",
  authDomain: "instagram-clone-d8604.firebaseapp.com",
  projectId: "instagram-clone-d8604",
  storageBucket: "instagram-clone-d8604.appspot.com",
  messagingSenderId: "482112037333",
  appId: "1:482112037333:web:60249e6a9c949f64a81d5c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};