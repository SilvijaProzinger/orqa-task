import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EmployeesList from "./EmployeesList";
import Search from "./Search";

const Employees = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
        <Search />
      </Box>
      <EmployeesList />
    </Box>
  );
};

export default Employees;
