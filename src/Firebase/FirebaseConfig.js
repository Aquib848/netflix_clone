import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCMSLlIzj47_Pxrkv2SQ84sCFEyXLfPndw",
  authDomain: "project-e70cc.firebaseapp.com",
  projectId: "project-e70cc",
  storageBucket: "project-e70cc.appspot.com",
  messagingSenderId: "240966946688",
  appId: "1:240966946688:web:82b8181cd9c3e3febabb65",
  measurementId: "G-KS72MTN8EK",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
