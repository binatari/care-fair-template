import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    Menu,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useRef, useState } from "react";
  
  const AmountFilter = ({ setFilter, preFilteredRows }) => {
    
    const [value, setValue] = useState('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);
    const inputElement = useRef(null);
    const [AnchorEl, setAnchorEl] = useState(null);
    const open = Boolean(AnchorEl);

    const handleChange = (event) => {
        setAnchorEl(inputElement.current.node)
    };

    const handleClose = () => {
        setAnchorEl(null)
      };

      const apply = () =>{
        setAnchorEl(null)
        setFilter("donation_details[0].amount", [min, max])
      }
    

    //   const zeroOut = (value) =>{
    //       if(!value){
    //           return 0
    //       }
    //       return value
    //   }

    
  
    return (
        <>
      <FormControl>
        <Select
          autoWidth
          placeholder="Donation type"
          inputRef={inputElement}
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0 ) {
              return (<Typography variant="big">Amount</Typography>);
            }
  
            return selected;
          }}
          size="small"
          value={value}
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
          onClick={(event) => handleChange(event)}
          //  open={open}
          id="demo-simple-select"
        >
        </Select>
      </FormControl>
      <Menu
        id="lock-menu"
        anchorEl={AnchorEl}
        open={open}
        onClose={handleClose}
      >
            <Box sx={{ p: "1em" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ maxWidth: "7em", mr: "0.5em" }}>
              <Typography variant="big" fontWeight={500}>
                Min
              </Typography>
              <TextField
                 type={'number'}
                 value={min}
                  onChange={(e)=>setMin(e.target.value)}
                size="small"
                sx={{
                  border: "none",
                  borderColor: "",
                  fontSize: "14px",
                  marginBottom: "2em",
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
              />
            </Box>
            <Box sx={{ maxWidth: "7em" }}>
              <Typography variant="big" fontWeight={500}>
                Max
              </Typography>
              <TextField
                type={'number'}
                value={max}
                size="small"
                onChange={(e)=>setMax(e.target.value)}
                sx={{
                  border: "none",
                  borderColor: "",
                  fontSize: "14px",
                  marginBottom: "2em",
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
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
             onClick={apply}
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
    );
  };
  
  export default AmountFilter;
  