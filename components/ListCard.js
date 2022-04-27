import { Avatar, Box, Card, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const ListCard = ({}) => {
  return (
    <Card variant="outlined">
        <Box sx={{px:'2em', pt:'2em'}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize={"19px"} fontWeight={700} lineHeight="24px">
          Recent Care receivers
        </Typography>
        <Link sx={{ textDecoration: "none", color: "primary.blue" }} variant='small'>
          View all
        </Link>
      </Box>
      <Typography fontSize={"12px"} component='p'>
        Caregivers: <Typography component='span' >12 in total</Typography>
      </Typography>
      </Box>
      <List>
        <ListItem
        dense
          sx={{
            borderBottom: "1px solid #DFE0EB",
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
            <Typography variant={"small"} fontSize='14px'>feel</Typography>
          </Box>
        </ListItem>
      </List>
    </Card>
  );
};

export default ListCard;
