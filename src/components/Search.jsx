import { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "../hooks/useDebounce";

const Search = ({ disabled, handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 400); 

  useEffect(() => {
    handleSearch(debouncedInputValue)
  }, [debouncedInputValue, handleSearch]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <TextField
      disabled={disabled}
      value={inputValue}
      onChange={handleInputChange}
      size="small"
      variant="outlined"
      color="primary"
      placeholder="Pretražite po imenu ili prezimenu"
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
