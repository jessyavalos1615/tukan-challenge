import React from "react";

import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

import plusIcon from "./assets/icon/plus-alt.svg";
import { ButtonVariant } from "./components/Button/ButtonTypes";
import Modal from "./layouts/Modal/Modal";

function App() {
  return (
    <div>
      <Header />
      <Button
        data-testid="app-button"
        variant={ButtonVariant.primary}
        onClick={(e) => console.log("Open Modal")}
      >
        <Icon data-testid="app-icon" icon={plusIcon} alt="plus-icon" />
      </Button>

      <Modal title="Add new visualization">Body</Modal>
    </div>
  );
}

export default App;
