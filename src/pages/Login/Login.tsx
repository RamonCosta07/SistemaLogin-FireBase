// Hooks
import { useState } from "react";
// React Router Dom
import { NavLink, useNavigate } from "react-router-dom";
// Components
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
// Styles
import { Container, Form, SubContainerSign } from "./loginStyles";
// Validadores
import { validarEmail, validarPassword } from "../../Utils/validadores";
// Services
import UserServices from "../../Services/UserServicie";
const userService = new UserServices();
// Interface
interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await userService.login(form);
      if (response) {
        alert("Usuário logado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      alert("Desculpe, algo deu errado no login " + error);
    } finally {
      setLoading(false);
    }
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarPassword(form.password);
  };

  return (
    <Container>
      <Form>
        <h1>Faça o seu login</h1>
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

        <Button
          text="Entrar"
          type="button"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="cadastrar">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
