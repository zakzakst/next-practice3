"use client";

import { ThemeProvider } from "./context/ThemeContext";
import { Test } from "./components/Test";

const Page = () => {
  return (
    <ThemeProvider>
      <div>
        <Test />
      </div>
    </ThemeProvider>
  );
};

export default Page;
