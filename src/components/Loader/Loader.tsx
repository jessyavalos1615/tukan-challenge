import React from "react";

import { LoadingSpinner, SpinnerContainer } from "./Style";

const Loader = () => {
  return (
    <SpinnerContainer data-testid='loading-spinner'>
      <LoadingSpinner></LoadingSpinner>
    </SpinnerContainer>
  );
};

export default Loader;
