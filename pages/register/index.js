import {
  Box,
  Typography,
  Alert,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import OtherRadio from "../../components/OtherRadio";
import Label from "../../components/register/Label";

import AlertDialog from "../../components/register/Modal";

const index = () => {
  const [value, setValue] = useState("");
  const pageStyles = {};
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      minHeight="100vh"
      bgcolor={"primary.light"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
      sx={{
        paddingX:{
          xs:'2.5em',
          sm:"4em",
          md:'4em'
        }
      }}
        bgcolor={"white"}
        maxWidth={"30rem"}
        width={"90%"}
       
        paddingY="2em"
        borderRadius={"16px"}
      >
        <Typography variant="big" component="p">
          Select the type of donee account you will like to setup.
        </Typography>
        <Alert
          severity="error"
          color={"grey"}
          sx={{ marginBlock: "1em", borderRadius: "8px", fontSize: "14px" }}
        >
          Once you setup your donee account you will be unable to change the
          account type.
        </Alert>
        <FormControl sx={{ marginBottom: "2em" }}>
          <RadioGroup name="radio-buttons-group" onChange={handleChange}>
            <FormControlLabel
              sx={{
                paddingY: "1em",
                paddingX: "0.5em",
                marginBlock: "0.4em",
                boxShadow: "0px 0px 1px rgba(66, 90, 112, 0.4)",
                borderRadius: "8px",
                marginInline: "auto",
                alignItems:'flex-start',
                border: value === "organization" && "1px solid",
                borderColor: value === "organization" && "primary.main",
              }}
              value="organization"
              control={<OtherRadio />}
              label={
                <Label
                 padding
                  head={"Registered charity"}
                  body={
                    "Select this option if you are setting up an account for a legally recognised charity organisation."
                  }
                />
              }
            />
            <FormControlLabel
              sx={{
                paddingY: "1em",
                paddingX: "0.5em",
                marginBlock: "0.4em",
                alignItems:'flex-start',
                border: value === "individual" && "1px solid",
                boxShadow: "0px 0px 1px rgba(66, 90, 112, 0.4)",
                borderColor: value === "individual" && "primary.main",
                borderRadius: "8px",
                marginInline: "auto",
              }}
              value="individual"
              control={<OtherRadio />}
              label={
                <Label
                  padding
                  head={"Individual donee"}
                  body={
                    "Select this option if you are setting up a personal donee account."
                  }
                />
              }
            />
          </RadioGroup>
        </FormControl>
        <AlertDialog value={value}/>
      </Box>
    </Box>
  );
};

export default index;
