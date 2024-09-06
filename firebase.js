// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD69z598WF3Fxp8urtj61oVgo7HTv70SjQ",
  authDomain: "flashcardai-202ce.firebaseapp.com",
  projectId: "flashcardai-202ce",
  storageBucket: "flashcardai-202ce.appspot.com",
  messagingSenderId: "691896620939",
  appId: "1:691896620939:web:d463dd888cbf440643018e",
  measurementId: "G-81LKL7VEZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);