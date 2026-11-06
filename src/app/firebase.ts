// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6raQv7qhSzsQxrj6Iku1bVPjQ-O8CKZw",
  authDomain: "bookdepo-3e6b1.firebaseapp.com",
  projectId: "bookdepo-3e6b1",
  storageBucket: "bookdepo-3e6b1.firebasestorage.app",
  messagingSenderId: "1015912580786",
  appId: "1:1015912580786:web:13916dd86344702a276bab",
  measurementId: "G-W0K9DK482P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export default app;