"use client";

import { ThemeProvider } from "next-themes";
import React, { FC } from "react";

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
