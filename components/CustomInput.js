import { TextField } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import HelperText from './HelperText';

const CustomInput = ({setState, id, control, error}) => {
    const handleChange = (event) => {
        setState(event.target.value);
      };
    
  return (
    <>
      <Controller
            name={id}
            control={control}
            render={({ field: { onChange, value, } }) => (
     <TextField
        id={id}
        margin="none"
        size="small"
        error={error}
        helperText={error && <HelperText text={error.message} />}
        onChange={onChange}
        fullWidth
        value={value}
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
      )}
      />
    </>
  )
}

export default CustomInput