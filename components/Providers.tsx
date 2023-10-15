"use client";

import { ThemeProvider } from "@/hooks/useTheme";
import React from "react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
