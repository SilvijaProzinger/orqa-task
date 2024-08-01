import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useFetchEmployees from "../hooks/useFetchEmployees";
import useDebounceScrollListener from "../hooks/useDebounceScrollListener";
import EmployeesTable from "./EmployeesTable";
import Search from "./Search";
import ErrorMessage from "./ErrorMessage";
import EmployeesIntro from "./EmployeesIntro";

const apiUrl = import.meta.env.VITE_API_EMPLOYEES_API ?? "";

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [showRowLoading, setShowRowLoading] = useState(false);

  const {
    employeesData,
    pageData,
    loading,
    error,
    fetchData,
  } = useFetchEmployees(apiUrl);
  const isInitialized = useRef(false);
  const bottomTableRef = useRef(null);

  useEffect(() => {
    // add ref to stop useEffect from running twice in a row by default in strict mode (not necessary in production)
    if (!isInitialized.current) {
      fetchData(searchQuery, 1);
      isInitialized.current = true;
    } else if (searchQuery !== null) { // searchQuery has default value null instead of empty string so that we can catch both filled and reset input
      fetchData(searchQuery, 1, true);
    }
  }, [isInitialized, fetchData, searchQuery]);

  useEffect(() => {
    console.log(employeesData);
    console.log(pageData);
  }, [employeesData, pageData]);

  // call fetchData when the user triggers scroll to bottom, but wrapped in a debounce so that the api call doesn't get triggered too fast
  const tableScrollListener = useDebounceScrollListener(() => {
    if (!bottomTableRef.current || loading) return;
    setShowRowLoading(true);

    const distanceBottom = 100;
    const scrollContainer = bottomTableRef.current;
    const bottom = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrollTop = scrollContainer.scrollTop;

    // check if the user is scrolling down to not call fetchData on every scroll
    const isScrollingDown = scrollTop > (scrollContainer.previousScrollTop || 0);
    scrollContainer.previousScrollTop = scrollTop;

    // if the user is scrolling down and there is more data to display, call the fetchData function
    if (
      isScrollingDown &&
      scrollTop > bottom - distanceBottom &&
      pageData.current_page < pageData.last_page
    ) {
      fetchData(searchQuery, pageData.current_page + 1, false);
    }
    setShowRowLoading(false);
  }, 400);

  useEffect(() => {
    const tableRef = bottomTableRef.current;
    if (tableRef) {
      tableRef.addEventListener("scroll", tableScrollListener);
      return () => {
        tableRef.removeEventListener("scroll", tableScrollListener);
      };
    }
  }, [tableScrollListener]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Box
      my={6}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <EmployeesIntro />
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
            <EmployeesTable
              employees={employeesData}
              loading={showRowLoading}
              ref={bottomTableRef}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Employees;
