import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";

import App from "../App";
import theme from "../theme/Theme";

describe("App Component", () => {
  test("renders button and icon", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const button = screen.getByTestId("app-button");
    const icon = screen.getByTestId("app-icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeVisible();
  });
});
