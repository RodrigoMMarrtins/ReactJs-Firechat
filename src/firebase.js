import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDVzDaOrI8cUck60QBOnEf3JeMKZcEy7AY",
    authDomain: "superchat-cde0e.firebaseapp.com",
    projectId: "superchat-cde0e",
    storageBucket: "superchat-cde0e.appspot.com",
    messagingSenderId: "449445343135",
    appId: "1:449445343135:web:67a29a4241ffac902797aa",
    measurementId: "G-BV8PRC2KQ8"
});

const db = getFirestore(firebaseApp);

const auth = getAuth();

export { db, auth }