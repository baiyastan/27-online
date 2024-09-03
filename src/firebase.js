// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOg7o1WNKCIYt0gwc3Sub3HyuupZ6VfJQ",
  authDomain: "a-27-register-2d0eb.firebaseapp.com",
  projectId: "a-27-register-2d0eb",
  storageBucket: "a-27-register-2d0eb.appspot.com",
  messagingSenderId: "934952004994",
  appId: "1:934952004994:web:bd65d306a3b10f0fcfb39b",
  measurementId: "G-3MLBZC3M5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
