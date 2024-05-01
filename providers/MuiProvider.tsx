"use client";

import { lightTheme } from "@/utils/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MuiProvider;
