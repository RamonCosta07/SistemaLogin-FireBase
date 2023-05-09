import Routering from "./route";
import UserServices from "../Services/UserServicie";
import { ReactNode } from "react";

const userServicie = new UserServices();

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const userAuth = userServicie.usuarioAutenticado();
  return userAuth ? <div>{children}</div> : <Routering />;
};

export default ProtectedRoutes;
