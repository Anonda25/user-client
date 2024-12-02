// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO31yXaAFh0oJZ5NvawX7vmk_LAEVi0tA",
  authDomain: "add-users-f6852.firebaseapp.com",
  projectId: "add-users-f6852",
  storageBucket: "add-users-f6852.firebasestorage.app",
  messagingSenderId: "629033130347",
  appId: "1:629033130347:web:7df53c368a80b6f7ec142e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);