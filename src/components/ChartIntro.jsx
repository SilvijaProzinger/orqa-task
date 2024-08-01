import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ChartIntro = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" my={2}>
        Dijagram
      </Typography>
      <Typography
        sx={{ width: isDesktop ? "50%" : "100%", textAlign: "center" }}
      >
        Ovdje možete vidjeti prikaz{" "}
        <Typography variant="span" color="primary">
          {" "}
          hijerarhijske strukture{" "}
        </Typography>{" "}
        zaposlenka.
      </Typography>
    </Box>
  );
};

export default ChartIntro;
