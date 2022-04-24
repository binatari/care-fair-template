import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const TypeFilter = ({ setFilter, preFilteredRows }) => {
  const [value, setValue] = useState([]);
  const [textBox, setTextBox] = useState("");
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([...list]);
  const filterRef = React.useRef();

  useEffect(() => {
    //get all unique donation types
    const unique = [
      ...new Set(
        preFilteredRows.map(
          (item) => item.values["donation_details[0].donation_type.type"]
        )
      ),
    ];
    setList(unique);
  }, [preFilteredRows]);

  useEffect(() => {
    const filter = list.filter((item) => {
      if (!textBox) return list
      return item.includes(textBox)
      
    });

    setFilteredList(filter);
  }, [preFilteredRows, textBox, list]);

  const handleChange = (event) => {
      console.log(event.target.value)
      if(event.target.value.includes('')){
          setFilter('donation_details[0].donation_type.type', list)
          return
      }
    setValue(event.target.value);
    setFilter('donation_details[0].donation_type.type', event.target.value)
  };

  const handleList = (event) => {
    event.preventDefault()
    setTextBox(event.target.value);
  };

  const stopPropagation = (e) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "Home":
      case "End":
        break;
      default:
        e.stopPropagation();
    }
  };
  const moveFocusToInput = (e) => {
    if (e.key === "Tab" || e.key === "ArrowRight") {
      e.stopPropagation();
      e.preventDefault();
      filterRef.current.focus();
    }
  };
  return (
    <FormControl>
      <Select
        autoWidth
        displayEmpty 
        size="small"
        multiple
        value={value}
        renderValue={(selected) => {
          const index = selected.indexOf('');
          if (index > -1) {
            selected.splice(index, 1); // 2nd parameter means remove one item only
          }
          if (selected.length === 0 ) {
            return (<Typography variant="big">Donation type</Typography>);
          }

          return selected.join(", ");
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
        //   onChange={handleChange}
      >
        {/* <MenuItem onKeyDown={moveFocusToInput} component={'span'}> */}
        <MenuItem disabled>
            SELECT ONE OR MORE
        </MenuItem>
        <TextField
          placeholder="Filter"
          inputRef={filterRef}
          sx={{
            border: "none",
            borderColor: "",
            fontSize: "14px",
            marginBottom: "0.5em",
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
          }}
          value={textBox}
          size="small"
          onKeyDown={stopPropagation}
          onChange={handleList}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i class="las la-search la-lg"></i>
              </InputAdornment>
            ),
          }}
        />
        {/* </MenuItem> */}
        {filteredList.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeFilter;
