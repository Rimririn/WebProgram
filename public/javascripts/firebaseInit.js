// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ExCKMB2UeIqbkn2WoBAF1n-JMo9T0-A",
  authDomain: "webbase-efa98.firebaseapp.com",
  projectId: "webbase-efa98",
  storageBucket: "webbase-efa98.appspot.com",
  messagingSenderId: "165262842118",
  appId: "1:165262842118:web:bcc52095e26399060f2687",
  measurementId: "G-J9K09GHZ88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
