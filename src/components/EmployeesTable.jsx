import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  tableCellClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef, useState } from "react";
import EmployeesTableCell from "./EmployeesTableCell";
import EmployeeDetails from "./EmployeeDetails";

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

const EmployeesTable = forwardRef(function EmployeesTable({ employees }, ref) {
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [employeeDetailsObj, setEmployeeDetailsObj] = useState({});

  const openEmployeeModal = (clickedEmployeeId) => {
    // select the employee object to display in employee details modal
    const selectedEmployee = employees.find(
      (employee) => employee.id === clickedEmployeeId
    );
    setEmployeeDetailsObj(selectedEmployee);
    setIsEmployeeModalOpen(true);
  };

  const closeEmployeeModal = () => {
    setIsEmployeeModalOpen(false);
  };

  return (
    <TableContainer
      ref={ref}
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
        {employees.length === 0 ? (
          <Typography p={2} color="text.secondary">
            Nema podataka za prikaz.
          </Typography>
        ) : (
          <TableBody>
            {employees.map((employee) => (
              <TableRow hover key={employee.id}>
                {columns.map((column) => {
                  const value = employee[column.id];
                  return (
                    <EmployeesTableCell
                      key={`${employee.key}-${column.id}`}
                      column={column}
                      value={value}
                      employeeId={employee.id}
                      firstName={employee.firstName}
                      lastName={employee.lastName}
                      openEmployeeModal={openEmployeeModal}
                    />
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <EmployeeDetails
        employeeDetails={employeeDetailsObj}
        onClose={closeEmployeeModal}
        isEmployeeModalOpen={isEmployeeModalOpen}
      />
    </TableContainer>
  );
});

export default EmployeesTable;
