// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ0MstDHsL4YONZ6ArlQw_XqUxxQVEcFo",
  authDomain: "frontend02.firebaseapp.com",
  projectId: "frontend02",
  storageBucket: "frontend02.firebasestorage.app",
  messagingSenderId: "340562401687",
  appId: "1:340562401687:web:2d5fde1b4948f81992ccd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)