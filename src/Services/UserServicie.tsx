import firebase from "../firebase";
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/compat/firestore";
// Interfaces
import { IFormSignUp, LoginData, IUsuario } from '../interfaces/interfaceLogin';

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

  async cadastrar(dados: IFormSignUp) {
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
        await firebase
          .firestore()
          .collection("usuarios")
          .doc(userCredential.user.uid)
          .set({
            uid: userCredential.user.uid,
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
  
  async getUserName(
    setUserData: React.Dispatch<React.SetStateAction<IUsuario>>
  ) {
      const user = firebase.auth().currentUser;
      if (user) {
        const userRef = firebase.firestore().collection("usuarios").doc(user.uid);
        const doc = await userRef.get();
        if (doc.exists) {
          const userData = doc.data() as IUsuario;
          setUserData(userData);
        }
      }
    }
  
  // implementar uma função que chama ele
  logout() {
    localStorage.clear();
    return firebase.auth().signOut();
  }
}
