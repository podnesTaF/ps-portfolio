import { createTheme, responsiveFontSizes } from "@mui/material";

export const lightTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiFab: {
        styleOverrides: {
          root: {
            width: "2.5rem",
            height: "2.5rem",
          },
          primary: {
            backgroundColor: "transparent",
            "&:hover": {
              color: "white",
              backgroundColor: "#915EFF",
            },
            transition: "all 0.5s ease !important",
          },
        },
      },
      MuiSpeedDialAction: {
        styleOverrides: {
          fab: {
            color: "#fff",
            backgroundColor: "transparent",
            "&:hover": {
              color: "whute",
              backgroundColor: "#1b1a2e",
            },
            transition: "all 0.5s ease",
            margin: "0px",
            marginBottom: "16px",
          },
        },
      },
    },
  })
);
