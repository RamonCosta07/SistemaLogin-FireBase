const validarEmail = (email: string) => {
  return email?.toString().includes("@") && email.toString().includes(".");
};

const validarPassword = (password: string) => {
  return password?.toString().length > 7;
};

const validarNome = (nome: string) => {
  return nome?.toString().length > 2;
};

const validarTelefone = (telefone: string) => {
  return telefone?.toString().length >= 8;
};

const validarConfirmarPassword = (
  password: string,
  confirmarPassword: string
) => {
  return validarPassword(password) && password === confirmarPassword;
};

export {
  validarEmail,
  validarPassword,
  validarNome,
  validarTelefone,
  validarConfirmarPassword,
};
