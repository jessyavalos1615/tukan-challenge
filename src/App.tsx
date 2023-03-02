import React, { useState } from "react";

import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

import plusIcon from "./assets/icon/plus-alt.svg";
import { ButtonVariant } from "./components/Button/ButtonTypes";
import AddVisualization from "./components/AddVisualization/AddVisualization";

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

      <AddVisualization
        shouldShow={shouldShow}
        onClose={() => setShouldShow(false)}
      />
    </div>
  );
}

export default App;
