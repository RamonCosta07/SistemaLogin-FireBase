import firebase from "../firebase";
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/compat/firestore";

interface LoginData {
  email: string;
  password: string;
  nome?: string;
  telefone?: string;
}

interface CadastroData {
  nome: string;
  email: string;
  telefone: string;
  password: string;
}

export default class UserServices {
  async login(dados: LoginData) {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(dados.email, dados.password);
      if (userCredential.user) {
        localStorage.setItem("nome", userCredential.user.displayName || "");
        localStorage.setItem("email", userCredential.user.email || "");
        const idToken = await userCredential.user.getIdToken();
        localStorage.setItem("token", idToken);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async cadastrar(dados: CadastroData) {
    try {
      // Cria um novo usuário no Firebase Auth
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(dados.email, dados.password);

      if (userCredential.user) {
        // Define o nome do usuário no perfil do Firebase Auth
        await userCredential.user.updateProfile({
          displayName: dados.nome,
        });

        // Adiciona o nome e telefone do usuário no Firestore
        console.log("Dados a serem salvos:", dados);
        await firebase
          .firestore()
          .collection("usuarios")
          .doc(userCredential.user.uid)
          .set({
            nome: dados.nome,
            telefone: dados.telefone,
          });

        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  usuarioAutenticado() {
    return localStorage.getItem("token") != undefined ? true : false;
  }

  // implementar uma função que chama ele
  logout() {
    localStorage.clear();
    return firebase.auth().signOut();
  }
}
