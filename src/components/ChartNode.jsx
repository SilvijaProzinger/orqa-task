import { Box, Typography } from "@mui/material";

const ChartNode = ({ node }) => {
  return (
    <Box className="orgchart-node" p={1}>
      <img
        src={node.imageUrl}
        alt={node.name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Typography variant="h6">{node.name}</Typography>
      <Typography color="text.secondary">{node.position}</Typography>
    </Box>
  );
};

export default ChartNode;
