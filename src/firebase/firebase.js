import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwrdj7HDDTnqrBw3RaisZpjUDOy76dmhk",
  authDomain: "lms-app-sb1.firebaseapp.com",
  projectId: "lms-app-sb1",
  storageBucket: "lms-app-sb1.appspot.com",
  messagingSenderId: "576967887209",
  appId: "1:576967887209:web:ea8dff6872cf08d4d795f8",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentication = getAuth(app);
