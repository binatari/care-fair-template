import {
  Avatar,
  Box,
  Button,
  Card,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const ListCard = ({ Head, subHead, items }) => {
  const [splice, setSplice] = useState(true)


  useEffect(()=>{

  }, [splice])


   
  return (
    <Card variant="outlined">
      <Box sx={{ px: "2em", pt: "2em" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={"19px"} fontWeight={700} lineHeight="24px">
            {Head && Head}
          </Typography>
          <Button
            sx={{ textDecoration: "none", color: "primary.blue" }}
            variant="small"
            onClick={()=>setSplice(!splice)}
          >
            {
              splice ? 'View all' : 'View less' 
            }
          </Button>
        </Box>
        <Typography fontSize={"12px"} component="p">
          {subHead && subHead}: <Typography component="span">{items? items.length:0} in total</Typography>
        </Typography>
      </Box>
    {
      items?
      (<List>
      {
        items?.filter((item, i)=>splice? i < 3 : i).map((item)=>(
          <ListItem
          dense
          sx={{
            borderBottom: "1px solid #DFE0EB",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemAvatar>
              <Avatar alt={`Avatar n°`} src={item?.profile_photo_url}/>
            </ListItemAvatar>
            <ListItemText primary={item?.name} />
          </Box>
          <Box>
            <Typography variant={"small"} fontSize="14px">
          {item?.date_joined}
            </Typography>
          </Box>
        </ListItem>
        ))
      }
    </List>):(
      <Typography variant="h6" fontWeight={700} py={'2em'}  textAlign={'center'}>No recent {subHead}</Typography>
    )}
    </Card>
  );
};

export default ListCard;
