import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme/Theme";
import Header from "../../components/Header/Header";

describe("Header component", () => {
  test("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const image = screen.getByAltText("tukan-logo");
    expect(image).toBeInTheDocument();
  });
});
