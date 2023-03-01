import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Icon from "../../components/Icon/Icon";
import plusIcon from "../../assets/icon/plus-alt.svg";
import theme from "../../theme/Theme";

describe("Icon component", () => {
  test("should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Icon data-testid="icon-test" icon={plusIcon} />
      </ThemeProvider>
    );
    const icon = screen.getByTestId("icon-test");

    expect(icon).toBeInTheDocument();
  });
});
