import { ButtonCustomizado } from "./buttonStyles";

interface IButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

const Button = ({ text, type, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonCustomizado type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonCustomizado>
  );
};

export default Button;
