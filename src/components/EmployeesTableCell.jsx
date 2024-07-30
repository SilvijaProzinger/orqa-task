import { Button, TableCell } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const EmployeesTableCell = ({ firstName, lastName, column, value }) => {
  if (column.id === "imageUrl") {
    return (
      <TableCell key={column.id} align={column.align}>
        {value ? (
          <img
            src={value}
            alt={`${firstName} ${lastName}`}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          "Nema slike"
        )}
      </TableCell>
    );
  }

  if (column.id === "akcija") {
    return (
      <TableCell key={column.id} align={column.align}>
        <Button variant="contained">
          <SearchIcon fontSize="small" sx={{marginRight: '5px'}}/>
          Pregled
        </Button>
      </TableCell>
    );
  }

  return (
    <TableCell key={column.id} align={column.align}>
      {value || "N/A"}
    </TableCell>
  );
};

export default EmployeesTableCell;
