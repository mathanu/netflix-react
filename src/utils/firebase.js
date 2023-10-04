// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-jNgyj2FGQBb_a5drgZ1OxHRWH70YXo",
  authDomain: "netflix-react-f6d0b.firebaseapp.com",
  projectId: "netflix-react-f6d0b",
  storageBucket: "netflix-react-f6d0b.appspot.com",
  messagingSenderId: "233231740443",
  appId: "1:233231740443:web:042f537bcd1279a4ef12be",
  measurementId: "G-87JZ8ZCZ1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();