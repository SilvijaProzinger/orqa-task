import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material/";
import "@fontsource/inter";
import Employees from "./components/Employees";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAF9F6", // fallback for gradient background color
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(180deg, rgba(142, 202, 230, 0.6), rgba(255, 255, 255, 1)) no-repeat",
          backgroundSize: "100% 20%",
        },
      },
    },
  },
});

function App() {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Employees />
      </ThemeProvider>
    </Container>
  );
}

export default App;
