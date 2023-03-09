import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme/Theme";
import DateRange from "../../components/DateRange/DateRange";

const onChange = jest.fn();

describe("DateRange component", () => {
  test("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <DateRange value={null} onChange={onChange} />
      </ThemeProvider>
    );
    const dateRange = screen.getByText("Choose range date");
    expect(dateRange).toBeInTheDocument();
  });

  test("Open calendar", () => {
    render(
      <ThemeProvider theme={theme}>
        <DateRange value={null} onChange={onChange} />
      </ThemeProvider>
    );
    const dateRange = screen.getByText("Choose range date");
    fireEvent.click(dateRange);
    const todayButton = screen.getByText("Today");
    expect(todayButton).toBeInTheDocument();
  });

  test("Should fire onChange event", () => {
    render(
      <ThemeProvider theme={theme}>
        <DateRange value={null} onChange={onChange} />
      </ThemeProvider>
    );
    const dateRange = screen.getByText("Choose range date");
    fireEvent.click(dateRange);
    const lastSevenDaysBtn = screen.getByText("Last 7 Days");
    fireEvent.click(lastSevenDaysBtn);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
