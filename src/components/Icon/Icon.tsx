import React from "react";

import { BaseIcon } from "./Style";
import { IconProps } from "./IconTypes";

const Icon = ({ icon, ...rest }: IconProps): JSX.Element => {
  return <BaseIcon src={icon} {...rest} />;
};

export default Icon;
