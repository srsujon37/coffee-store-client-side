// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDhPdtD6Ia6Iy3pEeJED3aZ4qmF8_LMaw",
  authDomain: "coffee-store-app-c6575.firebaseapp.com",
  projectId: "coffee-store-app-c6575",
  storageBucket: "coffee-store-app-c6575.firebasestorage.app",
  messagingSenderId: "839496852024",
  appId: "1:839496852024:web:c3422e0f3884a84ff33ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);