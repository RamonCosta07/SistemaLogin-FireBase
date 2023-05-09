// Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// Pages
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import SignIn from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";

const Routering = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/cadastrar" element={<SignIn />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default Routering;