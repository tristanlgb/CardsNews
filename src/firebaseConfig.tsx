// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYav4kaOzA_UZ0nv0ybDkTfnU_SPIb7W4",
    authDomain: "cardsnews-92292.firebaseapp.com",
    projectId: "cardsnews-92292",
    storageBucket: "cardsnews-92292.firebasestorage.app",
    messagingSenderId: "975309579606",
    appId: "1:975309579606:web:476644686c629fbee362f7",
    measurementId: "G-VJNWBXKDG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;