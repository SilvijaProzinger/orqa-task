import { Box, Typography } from "@mui/material";
import EmployeesList from "./EmployeesList";

const Employees = () => {
  return (
    <Box
      my={4}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1" m={2}>
        Zaposlenici
      </Typography>
      <Typography m={1}>
        Ovdje možete vidjeti prikaz zaposlenika u tablici te pretražiti
        zaposlenike po imenu.
      </Typography>
      <EmployeesList />
    </Box>
  );
};

export default Employees;
