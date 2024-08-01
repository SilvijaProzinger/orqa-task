import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material/";
import Employees from "./components/Employees";
import Chart from "./components/Chart";
import Home from "./components/Home";
import "./App.css";
import "@fontsource/inter";

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
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2.5rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(180deg, rgba(142, 202, 230, 0.6), rgba(255, 255, 255, 1)) no-repeat",
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
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zaposlenici" element={<Employees />} />
            <Route path="/dijagram" element={<Chart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
