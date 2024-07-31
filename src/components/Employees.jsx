import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useFetchEmployees from "../hooks/useFetchEmployees";
import useDebounceScrollListener from "../hooks/useDebounceScrollListener";
import EmployeesTable from "./EmployeesTable";
import Search from "./Search";
import ErrorMessage from "./ErrorMessage";

const apiUrl = import.meta.env.VITE_API_EMPLOYEES_API ?? "";

const Employees = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [searchQuery, setSearchQuery] = useState("");
  const [distanceBottom, setDistanceBottom] = useState(0);

  const {
    employeesData,
    pageData,
    loading,
    error,
    fetchData,
  } = useFetchEmployees(apiUrl);
  const isInitialized = useRef(false);
  const bottomTableRef = useRef(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // add ref to stop useEffect from running twice in a row by default in strict mode (not necessary in production)
    if (!isInitialized.current || searchQuery !== "") {
      fetchData(searchQuery, 1);
      isInitialized.current = true;
    }
  }, [fetchData, searchQuery]);

  useEffect(() => {
    console.log(employeesData);
    console.log(pageData);
  }, [employeesData, pageData]);

  // call fetchData when the user triggers scroll to bottom, but wrapped in a debounce so that the api call doesn't get triggered too fast
  const tableScrollListener = useDebounceScrollListener(() => {
    if (!bottomTableRef.current || loading) return;

    const scrollContainer = bottomTableRef.current;
    const bottom = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrollTop = scrollContainer.scrollTop;

    if (!distanceBottom) {
      setDistanceBottom(100);
    }

    // check if the user is scrolling down to not call fetchData on every scroll
    const isScrollingDown =
      scrollTop > (scrollContainer.previousScrollTop || 0);
    scrollContainer.previousScrollTop = scrollTop;

    // if the user is scrolling down and there is more data to display, call the fetchData function
    if (
      isScrollingDown &&
      scrollTop > bottom - distanceBottom &&
      pageData.current_page < pageData.last_page
    ) {
      fetchData(searchQuery, pageData.current_page + 1);
    }
  }, 200);

  useEffect(() => {
    const tableRef = bottomTableRef.current;
    if (tableRef) {
      tableRef.addEventListener("scroll", tableScrollListener);
      return () => {
        tableRef.removeEventListener("scroll", tableScrollListener);
      };
    }
  }, [tableScrollListener]);

  return (
    <Box
      my={6}
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
            <Search disabled={loading} handleSearch={handleSearch} />
          </Box>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <EmployeesTable employees={employeesData} ref={bottomTableRef} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Employees;
