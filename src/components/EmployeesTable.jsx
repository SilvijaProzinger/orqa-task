import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import EmployeesTableCell from "./EmployeesTableCell";

const columns = [
  { id: "id", label: "#", minWidth: 50 },
  { id: "imageUrl", label: "Slika", minWidth: 100 },
  { id: "firstName", label: "Ime", minWidth: 100 },
  { id: "lastName", label: "Prezime", minWidth: 100 },
  { id: "position", label: "Pozicija", minWidth: 130 },
  { id: "email", label: "Email", minWidth: 130 },
  { id: "akcija", label: "Akcija", minWidth: 100 },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "600",
  },
}));

const EmployeesList = ({ employees }) => {
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);

  const openEmployeeModal = () => {
    setIsEmployeeModalOpen(true);
  };

  const closeEmployeeModal = () => {
    setIsEmployeeModalOpen(false);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 600,
        borderRadius: "10px",
        boxShadow: "0 0 12px 8px rgba(142, 202, 230, 0.3)",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow hover tabIndex={-1} key={employee.id}>
              {columns.map((column) => {
                const value = employee[column.id];
                return (
                  <EmployeesTableCell
                    key={employee.id}
                    column={column}
                    value={value}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                  />
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesList;
