import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Paper, Link } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SchemaIcon from "@mui/icons-material/Schema";

const HomePagesList = () => {
  return (
    <Box
      component={Paper}
      p={6}
      m={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
        gap: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 12px 8px rgba(142, 202, 230, 0.3)",
      }}
    >
      <Box
        component={Paper}
        p={2}
        sx={{ backgroundColor: "white", maxWidth: "400px" }}
      >
        {" "}
        <AssignmentIndIcon
          color="primary"
          sx={{
            fontSize: "4rem",
            border: "1px solid primary",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h2" color="primary" mb={0.5}>
          Zaposlenici
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography color="text.secondary">
            Pregledajte popis zaposlenika i pretražite zaposlenike po imenu.
          </Typography>
          <Link
            component={RouterLink}
            to="/zaposlenici"
            py={1}
            px={2}
            sx={{
              border: "1px solid #8ECAE6",
              borderRadius: "10px",
              textDecoration: "none",
              "&:hover": {
                color: "#023047",
                border: "1px solid #023047",
              },
            }}
          >
            Vidi zaposlenike
          </Link>
        </Box>
      </Box>
      <Box
        component={Paper}
        p={2}
        sx={{ backgroundColor: "white", maxWidth: "400px" }}
      >
        {" "}
        <SchemaIcon
          color="primary"
          sx={{
            fontSize: "4rem",
            border: "1px solid primary",
            borderRadius: "50%",
          }}
        />
        <Typography variant="h2" color="primary" mb={0.5}>
          Dijagram
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography color="text.secondary">
            Pregledajte dijagram sa hijerarhijskim prikazom zaposlenika prema
            poziciji.
          </Typography>
          <Link
            component={RouterLink}
            to="/dijagram"
            py={1}
            px={2}
            sx={{
              border: "1px solid #8ECAE6",
              borderRadius: "10px",
              textDecoration: "none",
              "&:hover": {
                color: "#023047",
                border: "1px solid #023047",
              },
            }}
          >
            Vidi dijagram
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePagesList;
