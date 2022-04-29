import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";
import moment from "moment";
const InfoPanel = ({ head, items}) => {
  return (
    <>
      {head && head}
      <Typography variant={"small"} component="p" fontSize="14px" my="2.25em">
        All your subscription History.
      </Typography>
      <List>
        {items &&
          items.map((item) => (
            <ListItem
              dense
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemText primary={item.plan.name} />
              </Box>
              <Box>
                <Typography variant={"small"} fontSize="14px">
                 {moment(item.ends_at).format("[joined] MMM Do YY")}
                </Typography>
              </Box>
              <Box>
                <Typography variant={"small"} fontSize="14px" sx={{color:'primary.blue'}}>
                {`${item.plan.price} ${item.plan.currency}`}
                </Typography>
              </Box>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default InfoPanel;
