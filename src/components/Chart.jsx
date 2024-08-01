import { useEffect, useRef, useCallback } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import { Typography, Box, CircularProgress } from "@mui/material";
import useFetchEmployees from "../hooks/useFetchEmployees";
import ChartNode from "./ChartNode";
import ChartIntro from "./ChartIntro";
import useBuildChart from "../hooks/useBuildChart";

const apiUrl = import.meta.env.VITE_API_EMPLOYEES_API ?? "";

const Chart = () => {
  const { employeesData, fetchData } = useFetchEmployees(apiUrl);
  const isInitialized = useRef(false);

  const fetchAllData = useCallback(async () => {
    let currentPage = 1;
    let lastPage = 5;

    while (currentPage <= lastPage) {
      await fetchData("", currentPage, false);
      currentPage++;
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }, [fetchData]);

  useEffect(() => {
    if (!isInitialized.current) {
      fetchAllData();
      isInitialized.current = true;
    }
  }, [fetchAllData]);

  // convert api response data to organizational chart hierarchy
  const hierarchyData = useBuildChart(employeesData);

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
