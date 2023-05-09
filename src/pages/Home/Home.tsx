// Hooks
import { useEffect, useState } from "react";
// React Router Dom
import { useNavigate } from "react-router-dom";
// Components
import Button from "../../components/Button/Button";
// Styles
import { Container, Form } from "./homeStyles";
// Services
import UserServices from "../../Services/UserServicie";
const userService = new UserServices();
// Interfaces
import { IUsuario } from "../../interfaces/interfaceLogin";

// Firebase
import firebase from "../../firebase";
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/compat/firestore";

function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUsuario>({
    nome: "",
    telefone: "",
    uid: "",
  });

  const logout = async () => {
    await userService.logout();
    navigate("/home");
  };

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
        userService.getUserName(setUserData);
      } else {
        setUserLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Container>
      {userLoggedIn && (
        <Form>
          <h1>
            Bem vindo,{" "}
            {userData.nome.split(" ")[0].charAt(0).toUpperCase() +
              userData.nome.split(" ")[0].slice(1).toLowerCase()}
          </h1>
          <p>Seu número de telefone é: {userData.telefone}</p>
          <Button children="Sair" type="button" onClick={logout} disabled={false} bgColor="red" />
        </Form>
      )}
    </Container>
  );
}

export default Home;
