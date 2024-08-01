import { useEffect, useRef, useCallback } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import { Typography, Box, CircularProgress } from "@mui/material";
import useFetchEmployees from "../hooks/useFetchEmployees";
import ChartNode from "./ChartNode";
import ChartIntro from "./ChartIntro";

const apiUrl = import.meta.env.VITE_API_EMPLOYEES_API ?? "";

const Chart = () => {
  const { employeesData, pageData, fetchData } = useFetchEmployees(apiUrl);
  const isInitialized = useRef(false);

  const fetchAllData = useCallback(async () => {
    let currentPage = 1;
    let lastPage = 5;

    while (currentPage <= lastPage) {
      console.log(currentPage);
      await fetchData("", currentPage, false);
      currentPage++;
      await new Promise((resolve) => setTimeout(resolve, 200));
      console.log(`Fetching page: ${currentPage} of ${pageData.last_page}`);
    }
  }, [fetchData, pageData.last_page]);

  useEffect(() => {
    if (!isInitialized.current) {
      fetchAllData();
      isInitialized.current = true;
    }
  }, [fetchAllData]);

  // build hierarchy of data to pass through to our node
  const buildHierarchy = (data) => {
    const topLevel = data.find(
      (employee) => employee.position.toLowerCase() === "ceo"
    );

    if (!topLevel) {
      return null;
    }

    const secondLevel = data.filter(
      (employee) =>
        employee.position.toLowerCase().includes("manager") ||
        employee.position.toLowerCase().includes("director")
    );

    const thirdLevel = data.filter(
      (employee) =>
        !employee.position.toLowerCase().includes("manager") &&
        !employee.position.toLowerCase().includes("ceo")
    );

    return {
      ...topLevel,
      name: `${topLevel.firstName} ${topLevel.lastName}`,
      children: secondLevel.map((manager) => ({
        ...manager,
        name: `${manager.firstName} ${manager.lastName}`,
        children: thirdLevel.map((employee) => ({
          ...employee,
          name: `${employee.firstName} ${employee.lastName}`,
        })),
      })),
    };
  };

  // convert api response data to organizational chart hierarchy
  const hierarchyData = buildHierarchy(employeesData);

  return (
    <Box
      mt={6}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChartIntro />
      {hierarchyData ? (
        <Box
          p={2}
          mt={6}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0 0 12px 8px rgba(142, 202, 230, 0.3)",
            overflow: "auto",
          }}
        >
          <OrgChart tree={hierarchyData} NodeComponent={ChartNode} />
        </Box>
      ) : (
        <Box
          p={2}
          mt={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h5">Generiram dijagram</Typography>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </Box>
  );
};

export default Chart;
