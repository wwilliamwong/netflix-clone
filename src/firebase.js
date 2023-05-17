import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWMXtA1z-DKPC1hAZHISEqx8BUueyIudM",
  authDomain: "netflix-clone-83631.firebaseapp.com",
  projectId: "netflix-clone-83631",
  storageBucket: "netflix-clone-83631.appspot.com",
  messagingSenderId: "557400341337",
  appId: "1:557400341337:web:9b7bbfc2ea283f1a5eaa48",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
