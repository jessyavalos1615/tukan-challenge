import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";

import Button from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/ButtonTypes";

import theme from "../../theme/Theme";

describe("Button component", () => {
  test("should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant={ButtonVariant.primary}>Test</Button>
      </ThemeProvider>
    );
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });
});
