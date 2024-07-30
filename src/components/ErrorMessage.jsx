import { Box, Typography } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const ErrorMessage = ({ error }) => {
  return (
    <Box mt={4} sx={{ display: "flex", alignItems: "center" }}>
      <AnnouncementIcon color="error" />
      <Typography variant="h5" color="error" pl={1}>
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
