// Route
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Pages
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
// Firebase
import firebase from "../firebase";
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/compat/firestore";
// Components
import HomeRoute from "../components/HomeRoute";


const Routering = () => {

  // Verificar se está logado
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route
          path="/home"
          element={<HomeRoute userLoggedIn={userLoggedIn} />}
        />
      </Routes>
    </Router>
  );
};

export default Routering;