import { Avatar, Box, Card, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const AgencySummaryCard = ({agencies, Head}) => {
  return (
    <Card variant="outlined" sx={{backgroundColor:'primary.main', color:'white'}}>
        <Box sx={{px:'2em', pt:'2em'}}>
        <Typography fontSize={"19px"} fontWeight={700} lineHeight="24px" color={'white'}>
         {Head && Head}
        </Typography>
      </Box>
      {
        agencies ?
        agencies?.map((agency)=>(
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
                  src={agency.profile_photo_url && agency.profile_photo_url}
                />
              </ListItemAvatar>
              <ListItemText  primary={agency.name} />
            </Box>
            {/* <Box>
              <Typography variant={"small"} fontSize='14px'>{}</Typography>
            </Box> */}
          </ListItem>
        </List>
        )):(
          <Typography variant="h6" fontWeight={700} py={'2em'}  textAlign={'center'}>No recent Agencies</Typography>
        )
      }
     
    </Card>
  );
};

export default AgencySummaryCard;
