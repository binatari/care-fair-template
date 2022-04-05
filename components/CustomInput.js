import { TextField } from '@mui/material'
import React from 'react'


const CustomInput = ({setState, id, }) => {
    const handleChange = (event) => {
        setState(event.target.value);
      };
    
  return (
    <>
     <TextField
        id={id}
        margin="none"
        size="small"
        onChange={handleChange}
        fullWidth
        sx={{
          border: "none",
          borderColor: "",
          fontSize: "14px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey.border40",
            },
            "&:hover fieldset": {
                borderColor: "grey.border40",
              },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
          "&.MuiFormControl-root": {
            margin: 0,
            mb:'0.75em'
          },
          "& .Mui-disabled": {
            fontSize: "14px",
          },
        }}
      />
    </>
  )
}

export default CustomInput