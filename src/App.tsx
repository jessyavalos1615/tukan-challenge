import React from "react";

import "./App.css";
import Button from "./components/Button/Button";
import plusIcon from './assets/icon/plus-alt.svg';
import Icon from "./components/Icon/Icon";
import { ButtonVariant } from "./components/Button/ButtonTypes";

function App() {
  return (
    <div className="App">
      <Button variant={ButtonVariant.primary} onClick={(e) => console.log('first')}>
        <Icon icon={plusIcon} alt="plus-icon" />
      </Button>
    </div>
  );
}

export default App;
