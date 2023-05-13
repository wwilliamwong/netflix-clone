import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr3kIqEZ6O_ShcehHfrumiLZGZ0psFkNw",
  authDomain: "netflix-clone-d220d.firebaseapp.com",
  projectId: "netflix-clone-d220d",
  storageBucket: "netflix-clone-d220d.appspot.com",
  messagingSenderId: "613635869299",
  appId: "1:613635869299:web:bc95fccf65fa0c05d43806",
  measurementId: "G-GEQH3JKE7V",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
