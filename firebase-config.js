// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIVdex7PLmKVu3DMGm39IsdeCVhqBfpmw",
  authDomain: "techdebate-31985.firebaseapp.com",
  projectId: "techdebate-31985",
  storageBucket: "techdebate-31985.firebasestorage.app",
  messagingSenderId: "942974738999",
  appId: "1:942974738999:web:994175ac0fd52211ee55b2",
  measurementId: "G-B12XTQQR39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);