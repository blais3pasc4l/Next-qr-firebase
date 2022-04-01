import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";


// Get a database reference to our blog


const firebaseConfig = {
    apiKey: "AIzaSyDfwIYQbrlhu74m4RnH7MDDTgnK3-_wx_4",
    authDomain: "next-firebase-qr.firebaseapp.com",
    projectId: "next-firebase-qr",
    storageBucket: "next-firebase-qr.appspot.com",
    messagingSenderId: "58982179361",
    appId: "1:58982179361:web:2bd042dd30d9a56247f960",
    measurementId: "G-G04WM1LQCT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);
const db = getFirestore()



export { database, auth, db };