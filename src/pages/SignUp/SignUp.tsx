// Hooks
import { useState } from "react";
// React Router Dom
import { NavLink, useNavigate } from "react-router-dom";
// Components
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
// Styles
import { Container, Form, SubContainerSign } from "./signUpStyles";
// Validadores
import {
  validarEmail,
  validarPassword,
  validarConfirmarPassword,
  validarNome,
  validarTelefone,
} from "../../Utils/validadores";
// Services
import UserServices from "../../Services/UserServicie";
const userService = new UserServices();
// Interface
import { IFormSignUp } from "../../interfaces/interfaceLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<IFormSignUp>({
    email: "",
    password: "",
    nome: "",
    telefone: "",
  });
  const [confirmarPassword, setConfirmarPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "confirmarPassword") {
      setConfirmarPassword(e.target.value);
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data: IFormSignUp = {
        email: form.email,
        password: form.password,
        nome: form.nome ?? "",
        telefone: form.telefone ?? "",
      };
      const response = await userService.cadastrar(data);
      if (response) {
        alert("Usuário cadastrado com sucesso, por favor faça o login");
        navigate("/");
      }
    } catch (error) {
      alert("Desculpe, algo deu errado no cadastro " + error);
    } finally {
      setLoading(false);
    }
  };

  const validadorInput = () => {
    return (
      validarEmail(form.email) &&
      validarPassword(form.password) &&
      validarTelefone(form.telefone) &&
      validarNome(form.nome) &&
      validarConfirmarPassword(form.password, confirmarPassword)
    );
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro</h1>
        <Input
          name="nome"
          placeholder="Digite o seu nome"
          onChange={handleChange}
          type="text"
        />
        <Input
          name="telefone"
          placeholder="Digite o seu telefone"
          onChange={handleChange}
          type="number"
        />
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Input
          name="confirmarPassword"
          placeholder="Confirmar senha"
          onChange={handleChange}
          type="password"
        />

        <Button
          children="Cadastrar"
          type="submit"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="/">Entrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default SignUp;