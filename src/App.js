import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
  const user = null;

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
      } else {
        //Logged out
      }
    });
    return unSubscribe;
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
