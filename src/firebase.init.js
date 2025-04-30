// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdDeNXN5oPhVhkARJoVIVz_omckGjIAHQ",
  authDomain: "simple-authorization-dea3e.firebaseapp.com",
  projectId: "simple-authorization-dea3e",
  storageBucket: "simple-authorization-dea3e.firebasestorage.app",
  messagingSenderId: "655735316614",
  appId: "1:655735316614:web:3935aa6aa240a3ef447107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);