import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const EmployeesIntro = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant="h1" m={2}>
        Zaposlenici
      </Typography>
      <Typography
        sx={{ width: isDesktop ? "50%" : "100%", textAlign: "center" }}
      >
        Ovdje možete vidjeti{" "}
        <Typography variant="span" color="primary">
          prikaz zaposlenika
        </Typography>{" "}
        u tablici te opcijom pretrage pronaći zaposlenike po imenu i prezimenu.
      </Typography>
    </Box>
  );
};

export default EmployeesIntro;
