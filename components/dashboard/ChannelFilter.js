import {
    FormControl,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  
  const ChannelFilter = ({ setFilter, preFilteredRows }) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event) => {
      console.log(event.target.value);
      setValue(event.target.value);
      setFilter('channel',event.target.value)
    };
  
    return (
      <FormControl>
        <Select
          autoWidth
          displayEmpty
          size="small"
          value={value}
          renderValue={(selected) => {
            if (selected.length === 0 ) {
              return (<Typography variant="big">Channel</Typography>);
            }
  
            return selected;
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
          <MenuItem value={"mobile"}>Mobile app</MenuItem>
          {/*will most likely be changed*/}
          <MenuItem value={"manual"}>Manual entries</MenuItem>
        </Select>
      </FormControl>
    );
  };
  
  export default ChannelFilter;
  