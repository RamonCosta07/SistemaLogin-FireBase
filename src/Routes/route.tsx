// Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// Pages
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import SignIn from "../pages/SignUp/SignUp";

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
                <h1>Home</h1>
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