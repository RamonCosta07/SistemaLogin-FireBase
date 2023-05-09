// Route
import { Navigate } from "react-router-dom";
// Pages
import ProtectedRoutes from "../Routes/ProtectedRoutes";
import Home from "../pages/Home/Home";
// Firebase
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/compat/firestore";
// interface
import { IUserLoggedIn } from "../interfaces/interfaceComponents";

const HomeRoute = ({ userLoggedIn }: IUserLoggedIn) => {
  if (userLoggedIn) {
    return (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default HomeRoute;
