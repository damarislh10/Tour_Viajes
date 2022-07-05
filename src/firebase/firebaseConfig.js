// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6He2c3l_O3dHdmeH8mkU661zvR-SfeI8",
  authDomain: "tourviajes-cedb6.firebaseapp.com",
  projectId: "tourviajes-cedb6",
  storageBucket: "tourviajes-cedb6.appspot.com",
  messagingSenderId: "657091800356",
  appId: "1:657091800356:web:dcf4228b41dc6b4b0d97b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
