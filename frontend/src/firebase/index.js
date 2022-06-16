// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZeMmI2QmGDVmhz5Yb_pS9Pl6qJisU-04",
  authDomain: "ngan-ngok-fba6b.firebaseapp.com",
  projectId: "ngan-ngok-fba6b",
  storageBucket: "ngan-ngok-fba6b.appspot.com",
  messagingSenderId: "615200653789",
  appId: "1:615200653789:web:bcb14555b08a101ad1b634",
  measurementId: "G-P1MW0CZFND"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)