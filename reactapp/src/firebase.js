// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyNy2ME6osXdx6NSEwvQhKdsjKQ16FEM",
  authDomain: "myrealitygrow.firebaseapp.com",
  projectId: "myrealitygrow",
  storageBucket: "myrealitygrow.appspot.com",
  messagingSenderId: "569757375391",
  appId: "1:569757375391:web:9af2c8967950959d517baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)