import React from "react";

import { BaseIcon } from "./Style";
import { IconProps } from "./IconTypes";

const Icon = ({ icon, size = '24px', ...rest }: IconProps): JSX.Element => {
  return <BaseIcon src={icon} size={size} {...rest} />;
};

export default Icon;
