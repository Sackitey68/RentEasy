// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "renteasy-ef62f.firebaseapp.com",
  projectId: "renteasy-ef62f",
  storageBucket: "renteasy-ef62f.appspot.com",
  messagingSenderId: "68723749152",
  appId: "1:68723749152:web:a441b3a03dd705eb0f6745"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 