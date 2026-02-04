// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe2W4UWO021RV6YpdLxl8x2KhcYSc_ukI",
  authDomain: "netflixgpt-1baa9.firebaseapp.com",
  projectId: "netflixgpt-1baa9",
  storageBucket: "netflixgpt-1baa9.firebasestorage.app",
  messagingSenderId: "215438511212",
  appId: "1:215438511212:web:13af2b6c4685893c795c49",
  measurementId: "G-FS0SYFK46W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);