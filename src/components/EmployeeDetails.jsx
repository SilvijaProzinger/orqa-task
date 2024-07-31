import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

const EmployeeDetails = ({ isEmployeeModalOpen, employeeDetails, onClose }) => {
  return (
    <Dialog open={isEmployeeModalOpen} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "primary.main", color: "white" }}>
        Detalji o korisniku
      </DialogTitle>
      <DialogContent>
        <Box pt={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {employeeDetails.imageUrl && (
              <img
                src={employeeDetails.imageUrl}
                alt={`${employeeDetails.firstName} ${employeeDetails.lastName}`}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}
            <Box ml={2} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6">
                {employeeDetails.firstName} {employeeDetails.lastName}
              </Typography>
              <Box
                py={0.5}
                px={1}
                mt={0.5}
                sx={{ backgroundColor: "primary.light", borderRadius: "15px", width: 'fit-content' }}
              >
                {" "}
                <Typography variant="body2" color="white">
                  {employeeDetails.position}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            #{employeeDetails.id}
          </Typography>
          <Typography>
            <Typography component="span" sx={{ fontWeight: "600" }}>
              Kontakt broj:
            </Typography>{" "}
            {employeeDetails.contactNumber}
          </Typography>
          <Typography>
            <Typography component="span" style={{ fontWeight: "600" }}>
              Email:
            </Typography>{" "}
            {employeeDetails.email}
          </Typography>
          <Typography>
            <Typography component="span" sx={{ fontWeight: "600" }}>
              Adresa:
            </Typography>{" "}
            {employeeDetails.adress}
          </Typography>
          <Typography>
            <Typography component="span" sx={{ fontWeight: "600" }}>
              O zaposleniku:
            </Typography>{" "}
            {employeeDetails.about}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ margin: "0 1rem 1rem 0" }}>
        <Button variant="contained" onClick={onClose}>
          Zatvori
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeDetails;
