export interface IUsuario {
  nome: string;
  telefone: string;
  uid: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface IFormSignUp extends IFormLogin {
  nome: string;
  telefone: string;
}

export interface LoginData extends IFormLogin {
  nome?: string;
  telefone?: string;
}
