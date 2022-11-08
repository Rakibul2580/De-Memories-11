// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyB9ubd4uKrJWKOMW03JUp8qWvelwoL8RhU",
  authDomain: "photo-ass.firebaseapp.com",
  projectId: "photo-ass",
  storageBucket: "photo-ass.appspot.com",
  messagingSenderId: "896941503277",
  appId: "1:896941503277:web:37dadab00aa671bb7219a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
