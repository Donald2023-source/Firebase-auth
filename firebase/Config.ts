// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA22MYMP-CEMjeiHRCVkH1x5UON1-uT6_k",
  authDomain: "fir-auth-955ea.firebaseapp.com",
  projectId: "fir-auth-955ea",
  storageBucket: "fir-auth-955ea.firebasestorage.app",
  messagingSenderId: "343572407180",
  appId: "1:343572407180:web:36348703b17264d8b1aca9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

export { app, auth }