import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import SearchList from "../../components/SearchList/SearchList";
import theme from "../../theme/Theme";

const onChange = jest.fn();
jest.mock("../../Axios/Axios.ts", () => {
  const instance = {
    create: jest.fn(),
  };
  return jest.fn(() => instance);
});

describe("SearchList component", () => {
  test("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchList label="Search List test" onChange={onChange} />
      </ThemeProvider>
    );

    const searchList = screen.getByText("Search List test");
    expect(searchList).toBeInTheDocument();
  });
});
