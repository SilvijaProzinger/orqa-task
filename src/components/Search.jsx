import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <TextField
      size="small"
      variant="outlined"
      color="primary"
      placeholder="Pretražite zaposlenike..."
      sx={{
        "& .MuiInputBase-input": {
          color: "primary.dark",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "primary.main",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "& fieldset": {
            borderColor: "primary.main",
          },
          "&:hover fieldset": {
            borderColor: "primary.dark",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.dark",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
