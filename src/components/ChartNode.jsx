import { Box, Typography } from "@mui/material";

const ChartNode = ({ node }) => {
  return (
    <Box className="orgchart-node" p={1}>
      <img
        src={node.imageUrl}
        alt={node.name}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Typography variant="body" sx={{ display: "block" }}>
        {node.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {node.position}
      </Typography>
    </Box>
  );
};

export default ChartNode;
