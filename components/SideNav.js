import { Button, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const SideNav = ({children, setOpen, open}) => {

  return (
    <>
      <Drawer
        anchor={"right"}
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
           zIndex: (theme) => theme.zIndex.drawer + 4,
          "& .MuiDrawer-paper": {
            bgcolor:'transparent',
            width: '100%',
            maxWidth:'400px',
            boxSizing: "border-box",
            overflow:"visible",
          },
        }}
      >
        <Box sx={{ height: "100vh", bgcolor: "white", width: "100%", overflow:"visible"}}></Box>
        <Box
          sx={{
            position: "absolute",
            top: "1.5em",
            height:'3em',
            width:'3em',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'100%',
            cursor:'pointer',
            left: {
              xs:'1em',
              md:'-4em',
              lg:'-4em'
            },
            bgcolor: "white",
          }}
          onClick={() => setOpen(false)}
        >
          <CloseRoundedIcon/>
        </Box>
        {children}
      </Drawer>
    </>
  );
};

export default SideNav;
