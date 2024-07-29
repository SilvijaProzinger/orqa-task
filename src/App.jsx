import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import "@fontsource/inter";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAF9F6",
      paper: "#F8F8F8",
    },
    primary: {
      light: "#8ECAE6",
      main: "#219EBC",
      dark: "#023047",
    },
    secondary: {
      main: "#FFB703",
      dark: "#FB8500",
    },
    text: {
      primary: "#1D1D1D",
      secondary: "#8E8E8E",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#FB8500",
    },
    success: {
      main: "#388e3c",
    },
    info: {
      main: "#219EBC",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Inter",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
