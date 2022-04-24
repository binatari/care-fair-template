import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const AidFilter = ({ setFilter, preFilteredRows }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    if(event.target.value === 'eligible'){
        setFilter('apply_gift_aid_to_donation',true)
        return
    }
    if(event.target.value === 'non-eligible'){
        setFilter('apply_gift_aid_to_donation',false)
        return
    }
    setFilter('apply_gift_aid_to_donation',event.target.value)
  
  };

  return (
    <FormControl>
      <Select
        autoWidth
        displayEmpty 
        placeholder="Donation type"
        size="small"
        value={value}
        renderValue={(selected) => {
            console.log(value.length)
            if (value.length === 0) {
              return (<Typography variant="big">Gift aid</Typography>);
            }
  
            return selected
          }}
        sx={{
          borderRadius: "16px",
          "&.Mui-focused": {
            // color:"primary.main",
            // border:"1px solid black",
            "& .MuiOutlinedInput-notchedOutline": {
              boxShadow: "none",
              //used to remove blue styling
              border: "1px solid",
              borderColor: "grey.main",
            },
          },
        }}
        onChange={(event) => handleChange(event)}
        //  open={open}
        id="demo-simple-select"
      >
        <MenuItem value={"any"}>Any</MenuItem>
        <MenuItem value={"eligible"}>Gift Aid eligible</MenuItem>
        <MenuItem value={"non-eligible"}>Gift Aid non-eligible</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AidFilter;
