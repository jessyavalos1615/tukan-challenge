import styled from "styled-components";
import { BaseIconTypes } from "./IconTypes";

export const BaseIcon = styled.img<BaseIconTypes>`
  width: ${({ size }) => size};
`;
