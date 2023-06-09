import { InputCustomizado } from "./inputStyles";
import { IInputProps } from "../../interfaces/interfaceComponents";

const Input = ({ name, placeholder, onChange, type }: IInputProps) => {
  return (
    <InputCustomizado
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
