import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSaSiSVnHFBoc2ijRib8s7Y46a-2TJlEE",
  authDomain: "react-auth-b91d8.firebaseapp.com",
  projectId: "react-auth-b91d8",
  storageBucket: "react-auth-b91d8.appspot.com",
  messagingSenderId: "369128274458",
  appId: "1:369128274458:web:e54ec7847dfec39ba52fa3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);