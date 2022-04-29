import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const CustomListItem = ({left, right}) => {
  return (
    <ListItem
      dense
      sx={{
        border: "1px solid #DFE0EB",
        borderRadius: "8px",
        py: "1.5em",
        px: "1.25em",
        mt:'0.65em',
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemText primary={left && left} />
      </Box>
      <Box>
        <Typography variant={"small"} fontSize="14px">
          {right && right}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default CustomListItem;
