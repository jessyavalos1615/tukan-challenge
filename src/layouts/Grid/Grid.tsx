import React from "react";

import { GridProps } from "./GridTypes";
import { GridContainer } from "./Style";

const Grid = ({ children }: GridProps) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;
