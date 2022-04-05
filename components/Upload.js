import React from "react";
import { Button, TextField } from "@mui/material";
const Upload = () => {
  const onFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
  };
  const UploadButton = (props) => {
    return (
      <>
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={onFileChange}
          />
          <Button
            component="span"
            sx={{
              textTransform: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              fontWeight: 600,
              color: "grey.dark",
              fontSize: "14px",
              borderLeft: "1px solid",
              borderLeftColor: "grey.border40",
              borderRadius: "4px",
            }}
            disableElevation
            disableFocusRipple
            disableRipple
          >
            Select file
          </Button>
        </label>
      </>
    );
  };

  return (
    <>
      <TextField
        id="Upload"
        size="small"
        fullWidth
        disabled
        sx={{
          mt: "0.5em",
          '& .MuiOutlinedInput-root.Mui-disabled':{
              '& fieldset':{
                borderColor:'grey.border40', 
              }
          }
        }}
        placeholder="Select or drag file"
        InputProps={{ endAdornment: <UploadButton /> }}
      />
    </>
  );
};

export default Upload;
