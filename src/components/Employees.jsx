import { useEffect, useRef } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EmployeesTable from "./EmployeesTable";
import Search from "./Search";
import useFetchData from "../hooks/useFetchData";
import ErrorMessage from "./ErrorMessage";

const apiUrl = import.meta.env.VITE_API_EMPLOYEES_API ?? "";

const Employees = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { employeesData, pageData, loading, error, fetchData } = useFetchData(
    apiUrl,
    4,
    ""
  );
  const isInitalized = useRef(false);

  useEffect(() => {
    // add ref to stop useEffect from running twice in a row by default in strict mode (not necessary in production)
    if (!isInitalized.current) {
      fetchData();
      isInitalized.current = true;
    }
  }, [fetchData]);

  useEffect(() => {
    console.log(employeesData);
    console.log(pageData);
  }, [employeesData, pageData]);

  return (
    <Box
      my={4}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" m={2}>
        Zaposlenici
      </Typography>
      <Typography
        my={1}
        sx={{ width: isDesktop ? "50%" : "100%", textAlign: "center" }}
      >
        Ovdje možete vidjeti{" "}
        <Typography variant="span" color="primary">
          prikaz zaposlenika
        </Typography>{" "}
        u tablici te opcijom pretrage pronaći zaposlenike po imenu i prezimenu.
      </Typography>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            mt={6}
            mb={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="h4">Popis zaposlenika</Typography>
            <Search disabled={loading} />
          </Box>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <EmployeesTable employees={employeesData}/>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Employees;
