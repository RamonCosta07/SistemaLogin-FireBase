import { InputCustomizado } from "./inputStyles";

interface IInputProps {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

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
