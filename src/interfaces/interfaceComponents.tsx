export interface IButtonProps {
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  bgColor?: string;
}

export interface IInputProps {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export interface IUserLoggedIn {
  userLoggedIn: boolean;
}
