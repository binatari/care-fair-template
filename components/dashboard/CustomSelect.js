import React from 'react'
import {
    Box,
    Button,
    Divider,
    FormControl,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import { useEffect, useRef, useState } from "react";
  import DateSetter from "../DatePicker";
  import moment from "moment";
  
const CustomSelect = ({setFilter}) => {
    const date = moment();
  const [dateValue, setDateValue] = useState([date, date]);
  const [secondAnchorEl, setSecondAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const secondOpen = Boolean(secondAnchorEl);
  const secondHandleClose = () => {
    if (dateValue.length === 2) {
        setFilter("age", dateValue);
        setSecondAnchorEl(null);
      }
   
  };

  const inputElement = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === 30) {
      setSecondAnchorEl(inputElement.current.node);
    }
  };

  const [value, setValue] = useState(0);

  return (
    <>
    <FormControl>
        <Select
          autoWidth
          size='small'
          inputRef={inputElement}
          value={value}
          sx={{
              borderRadius:'16px',
              "&.Mui-focused":{
                // color:"primary.main",
                // border:"1px solid black",
                "& .MuiOutlinedInput-notchedOutline":{
                 boxShadow: "none",
                 //used to remove blue styling
                 border:'1px solid',
                 borderColor:'grey.main',
                }
              },
          }}
          onChange={(event) => handleChange(event)}
          //  open={open}
          id="demo-simple-select"
          //   onChange={handleChange}
        >
          <MenuItem value={0}>Anytime</MenuItem>
          <MenuItem value={10}>In the past week</MenuItem>
          <MenuItem divider value={40}>
            In the past month
          </MenuItem>
          <MenuItem
            value={30}
            // component="button"
          >
            Custom range
          </MenuItem>
        </Select>
      </FormControl>
      <Menu
        id="lock-menu"
        anchorEl={secondAnchorEl}
        open={secondOpen}
        onClose={secondHandleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        <Box sx={{ p: "1em" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ maxWidth: "7em", mr: "0.5em" }}>
              <Typography variant="big" fontWeight={500}>
                From
              </Typography>
              <DateSetter
                dateValue={dateValue}
                setDateValue={setDateValue}
                index={0}
              />
            </Box>
            <Box sx={{ maxWidth: "7em" }}>
              <Typography variant="big" fontWeight={500}>
                To
              </Typography>
              <DateSetter
                dateValue={dateValue}
                setDateValue={setDateValue}
                index={1}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={secondHandleClose}
              sx={{
                borderRadius: "8px",
                paddingY: "8px",
                paddingX: "12px",
                fontSize: "14px",
                fontWeight: "600",
                textTransform: "none",
                mt: "1em",
                "&.Mui-disabled": {
                  opacity: "0.3",
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
              variant="contained"
              color="primary"
              disableElevation
              disableFocusRipple
              disableRipple
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Menu>
    </>
  )
}

export default CustomSelect