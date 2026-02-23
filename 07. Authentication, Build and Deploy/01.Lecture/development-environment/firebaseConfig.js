// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdtwcOjgSx0a-WsS1A2CsiKCuhkUihEY",
  authDomain: "magdana-maro.firebaseapp.com",
  projectId: "magdana-maro",
  storageBucket: "magdana-maro.firebasestorage.app",
  messagingSenderId: "726623074898",
  appId: "1:726623074898:web:99cf0be3ee95a43a20fd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);