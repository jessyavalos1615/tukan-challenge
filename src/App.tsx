import React, { useState } from "react";

import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

import plusIcon from "./assets/icon/plus-alt.svg";
import { ButtonVariant } from "./components/Button/ButtonTypes";
import Modal from "./layouts/Modal/Modal";

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <div>
      <Header />
      <main>
        <section>
          <Button
            data-testid="app-button"
            variant={ButtonVariant.primary}
            onClick={() => setShouldShow(true)}
            style={{ marginBottom: "15px", marginLeft: "auto" }}
          >
            <Icon data-testid="app-icon" icon={plusIcon} alt="plus-icon" />
          </Button>
          <hr />
        </section>
        <section></section>
      </main>

      <Modal
        title="Add new visualization"
        shouldShow={shouldShow}
        onClose={() => setShouldShow(false)}
      >
        Body
      </Modal>
    </div>
  );
}

export default App;
