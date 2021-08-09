import { createTheme } from "@material-ui/core";

const lightTheme = createTheme({
  spacing: 8,

  palette: {
    type: "light",
    text: {
      primary: "#1c1c1c",
    },
    primary: {
      main: "#d53369",
    },
    secondary: {
      main: "#1c1c1c",
    },
    background: {
      default: "#fffffb",
    },
  },

  typography: {
    h1: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h2: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h3: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
      fontSize: "2.2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    caption: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "0.9rem",
      textTransform: "uppercase",
    },
  },
});

const darkTheme = createTheme({
  spacing: 8,

  palette: {
    type: "dark",
    text: {
      primary: "#fffffb",
    },
    primary: {
      main: "#d53369",
    },
    secondary: {
      main: "#fffffb",
    },
    background: {
      default: "#1c1c1c",
    },
  },

  typography: {
    h1: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h2: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
    },
    h3: {
      fontFamily: "Source Serif Pro, serif",
      fontWeight: "600",
      fontSize: "2.2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    caption: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "0.9rem",
      textTransform: "uppercase",
    },
  },
});

export { lightTheme, darkTheme };