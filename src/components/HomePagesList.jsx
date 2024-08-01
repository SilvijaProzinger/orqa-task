import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Link,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
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
        flexWrap: "wrap",
        gap: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 12px 8px rgba(142, 202, 230, 0.3)",
      }}
    >
      <Card sx={{ maxWidth: 400, boxShadow: 3, backgroundColor: "white" }}>
        <CardMedia
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            borderBottom: "1px solid #e0e0e0",
            backgroundColor: "#219EBC",
          }}
        >
          <AssignmentIndIcon
            sx={{
              fontSize: "4rem",
              border: "1px solid",
              borderColor: "white",
              borderRadius: "50%",
              padding: "10px",
              color: "white",
            }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h2" color="primary" mb={1}>
            Zaposlenici
          </Typography>
          <Typography color="text.secondary" paragraph>
            Pregledajte popis zaposlenika i pretražite zaposlenike po imenu.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 400, boxShadow: 3, backgroundColor: "white" }}>
        <CardMedia
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            borderBottom: "1px solid #e0e0e0",
            backgroundColor: "#219EBC",
          }}
        >
          <SchemaIcon
            sx={{
              fontSize: "4rem",
              border: "1px solid",
              borderColor: "white",
              borderRadius: "50%",
              padding: "10px",
              color: "white",
            }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h2" color="primary" mb={1}>
            Dijagram
          </Typography>
          <Typography color="text.secondary" paragraph>
            Pregledajte dijagram sa hijerarhijskim prikazom zaposlenika prema
            poziciji.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePagesList;
