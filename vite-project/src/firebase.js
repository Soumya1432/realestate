// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fullstack-885c3.firebaseapp.com",
  projectId: "fullstack-885c3",
  storageBucket: "fullstack-885c3.appspot.com",
  messagingSenderId: "851504803751",
  appId: "1:851504803751:web:cfe198e9d18d0cb08e5082"
};

// Initialize Firebase
export   const app = initializeApp(firebaseConfig);