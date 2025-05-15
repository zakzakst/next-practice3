import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import { Test } from "./Test";

test("test", () => {
  render(
    <ThemeProvider>
      <Test />
    </ThemeProvider>
  );
  expect(screen.getByTestId("theme-text")).toHaveTextContent("light");
});
