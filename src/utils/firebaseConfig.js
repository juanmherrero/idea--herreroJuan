import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6mR6wpVf9RaC7ewuCyGa_0fAXPaaKj4o",
    authDomain: "huemulclothes.firebaseapp.com",
    projectId: "huemulclothes",
    storageBucket: "huemulclothes.appspot.com",
    messagingSenderId: "12701510288",
    appId: "1:12701510288:web:39a797cd3668b320844615"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
