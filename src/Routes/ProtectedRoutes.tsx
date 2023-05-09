import Routering from "./route";
import UserServices from "../Services/UserServicie";
const userServicie = new UserServices();
// Interface
import { ProtectedRoutesProps } from '../interfaces/interfaceRoute';

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const userAuth = userServicie.usuarioAutenticado();
  return userAuth ? <div>{children}</div> : <Routering />;
};

export default ProtectedRoutes;
