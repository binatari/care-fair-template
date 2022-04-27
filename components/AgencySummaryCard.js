import { Avatar, Box, Card, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const AgencySummaryCard = ({}) => {
  return (
    <Card variant="outlined" sx={{backgroundColor:'primary.main', color:'white'}}>
        <Box sx={{px:'2em', pt:'2em'}}>
        <Typography fontSize={"19px"} fontWeight={700} lineHeight="24px" color={'white'}>
          Recent Agency
        </Typography>
      </Box>
      <List>
        <ListItem
        dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{display:'flex', alignItems:'center'}}> 
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°`}
              />
            </ListItemAvatar>
            <ListItemText  primary={`Line item`} />
          </Box>
          <Box>
            <Typography variant={"small"} fontSize='14px'>problem</Typography>
          </Box>
        </ListItem>
      </List>
    </Card>
  );
};

export default AgencySummaryCard;
