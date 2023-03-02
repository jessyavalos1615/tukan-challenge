import styled, { color } from "styled-components";
import { BaseButtonTypes, ButtonVariant } from "./ButtonTypes";

type ButtonColors = {
  [key in ButtonVariant]: keyof color;
};

export const BaseButton = styled.button<BaseButtonTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  max-width: 248px;
  min-width: 100px;
  width: fit-content;
  height: 49px;

  border-width: 0;
  border-radius: 5px;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) =>
    theme.colors[backgroundColor[variant]]};

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const backgroundColor: ButtonColors = {
  primary: "primaryColor",
  secondary: "primaryColor_light",
};
