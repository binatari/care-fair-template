import { Box, ListItem, Typography } from "@mui/material";
import React from "react";

const CustomListItem = ({error=false, success=false, processing=false, index, rightText='', leftText='', clarified=false, big}) => {
  return (
    <ListItem
      sx={{
        borderBottom: "1px solid",
        borderColor: "grey.border40",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant={'big'}>
          {leftText}
      </Typography>
      <Box>
        
     { error && <i class={'las la-times-circle'} style={{color:"red"}}></i>}
     { success && <i class={'las la-check-circle'} style={{color:"blue"}}></i>}
     { processing && <i class="las la-ellipsis-h" style={{color:'orange'}}></i>}
     { clarified && <i class="las la-check" style={{color:"green"}}></i>}
      <Typography variant={big ?'h4':'big'}>
          {rightText}
      </Typography>
      </Box>
    </ListItem>
  );
};

export default CustomListItem;
