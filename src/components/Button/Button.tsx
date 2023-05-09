import { ButtonCustomizado } from "./buttonStyles";
import { IButtonProps } from '../../interfaces/interfaceComponents';

const Button = ({ children, type, onClick, disabled, bgColor }: IButtonProps) => {
  return (
    <ButtonCustomizado type={type} onClick={onClick} disabled={disabled} bgColor={bgColor}>
      {children}
    </ButtonCustomizado>
  );
};

export default Button;
