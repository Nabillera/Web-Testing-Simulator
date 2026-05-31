import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlVgCJWPWpVKX3ZbbDfLtqoLcBL7nQdh4",
  authDomain: "web-testing-simulator.firebaseapp.com",
  projectId: "web-testing-simulator",
  storageBucket: "web-testing-simulator.firebasestorage.app",
  messagingSenderId: "115475140697",
  appId: "1:115475140697:web:6936bfe51f0101271d6148",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
