import React from "react";

import { BaseButton } from "./Style";
import { ButtonProps } from "./ButtonTypes";

const Button = ({ children, variant, ...rest }: ButtonProps): JSX.Element => {
  return (
    <BaseButton variant={variant} {...rest}>
      {children}
    </BaseButton>
  );
};

export default Button;
