import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Label = ({head, body, padding}) => {
  return (
    <Box sx={{paddingRight: padding? '2em' : ''}}>
      <Typography component="p" variant="big">{head}</Typography>
      <Typography component="p" variant="small">
       {body}
      </Typography>
    </Box>
  );
};

export default Label;
