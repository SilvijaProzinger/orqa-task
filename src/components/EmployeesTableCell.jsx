import { Button, TableCell } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const EmployeesTableCell = ({
  firstName,
  lastName,
  employeeId,
  column,
  value,
  openEmployeeModal
}) => {
  if (column.id === "imageUrl") {
    return (
      <TableCell key={`${employeeId}-${column.id}`} align={column.align}>
        {value ? (
          <img
            src={value}
            alt={`${firstName} ${lastName}`}
            style={{
              width: "50px",
              height: "50px",
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
      <TableCell key={`${employeeId}-${column.id}`} align={column.align}>
        <Button variant="contained" onClick={() => openEmployeeModal(employeeId)}>
          <SearchIcon fontSize="small" sx={{ marginRight: "5px" }} />
          Pregled
        </Button>
      </TableCell>
    );
  }

  return (
    <TableCell key={`${employeeId}-${column.id}`} align={column.align}>
      {value || "N/A"}
    </TableCell>
  );
};

export default EmployeesTableCell;
