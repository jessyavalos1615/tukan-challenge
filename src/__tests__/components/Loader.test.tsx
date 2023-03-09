import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Loader from "../../components/Loader/Loader";
import theme from "../../theme/Theme";

describe("Loader component", () => {
  test("should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );

    const loader = screen.getByTestId("loading-spinner");
    expect(loader).toBeInTheDocument();
  });
});
