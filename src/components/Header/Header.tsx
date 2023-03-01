import React from "react";

import Icon from "../Icon/Icon";
import { HeaderContainer } from "./Style";

import logoIcon from "../../assets/images/tukan_logo_trim.fa49c6d7.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Icon icon={logoIcon} size="140px" alt="tukan-logo" />
    </HeaderContainer>
  );
};

export default Header;
