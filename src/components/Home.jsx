import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomePagesList from "./HomePagesList";

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      my={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" m={2}>
          Pregled zaposlenika i dijagrama
        </Typography>
        <Typography
          my={1}
          sx={{ width: isDesktop ? "50%" : "100%", textAlign: "center" }}
        >
          Odaberite stranicu za prikaz{" "}
          <Typography component="span" color="primary" fontSize="inherit">
            zaposlenika u tablici
          </Typography>{" "}
          ili{" "}
          <Typography component="span" color="primary" fontSize="inherit">
            dijagrama
          </Typography>{" "}
          koji prikazuje hijerarhiju zaposlenika prema poziciji.
        </Typography>
        <HomePagesList />
      </Box>
    </Box>
  );
};

export default Home;
