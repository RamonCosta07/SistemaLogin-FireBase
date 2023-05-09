import styled from "styled-components";
import { IButtonProps } from '../../interfaces/interfaceComponents';

export const ButtonCustomizado = styled.button<IButtonProps>`
  color: #fff;
  font-size: 20px;
  border: 30px;
  background-color: ${(props) => props.bgColor || "#6a6a6a"};
  border-radius: 8px;
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  ${(props) =>
    props.disabled === false &&
    `
    &:hover {
      background-color: #FFF;
      color: #6a6a6a;
    }
  `}
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.7
  `}
`;
