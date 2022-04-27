import { Checkbox, FormControl, FormControlLabel, Paper, RadioGroup, TextareaAutosize, TextField, Typography } from "@mui/material";
import React from "react";
import OtherRadio from "./OtherRadio";
import Label from "./register/Label";

const EditDonationType = () => {
  return (
    <>
      <Typography variant="h4" mb={'2em'}>Edit information</Typography>
      <Typography variant="big" component={"p"} fontWeight={500} mb={'0.5em'}>
        Donation type name
      </Typography>
      <TextField
        placeholder="Donation Type"
        // helperText={errors.passwordText1 && <HelperText text={errors.passwordText1.message} />}
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
        size="small"
        fullWidth
      />
      <Typography variant="big" component={"p"} fontWeight={500} mb={'0.5em'}>
        Description
      </Typography>
      <TextareaAutosize
        aria-label="description"
        minRows={4}
        placeholder="Description"
        style={{ width: "100%", border: "1px solid #E4E7EB", mb:'2em' }}
      />
       <Typography variant="big" component={"p"} fontWeight={500} mb={'0.5em'} mt={'2em'}>
        Donation Options
      </Typography>
      <FormControlLabel
        sx={{
          fontSize: "14px",
          color: "grey.light",
          mb:"2em",
          alignItems:'flex-start',
          "& .MuiFormControlLabel-label": {
            fontSize: "14px",
          },
          "& svg": {
            fontSize: "1.2rem",
          },
        }}
        control={<Checkbox/>}
        label={
          <Label
            head={"Enable GiftAid on this donation"}
            body={
              "Your donee gets an additional 25% on your donation – at no extra cost to you."
            }
          />
        }
      />
       <Typography variant="big" component={"p"} fontWeight={500} mb={'0.5em'}>
        Donation type status
      </Typography>
      <FormControl sx={{ marginBottom: "2em" }}>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FormControlLabel
                value="Active"
                control={<OtherRadio />}
                label={<Label head={"Active"} />}
              />
              <FormControlLabel
                value="Inactive"
                control={<OtherRadio />}
                label={<Label head={"Inactive"} />}
              />
            </RadioGroup>
          </FormControl>
    </>
  );
};

export default EditDonationType;
