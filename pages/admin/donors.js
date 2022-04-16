import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import FullLayout from "../../components/layouts/FullLayout";
const donors = () => {
  return (
    <Box display='flex' justifyContent={'space-between'} alignItems='center'  mb='2em'>
    <Typography  variant='h4' component={'h2'} >
        Donors
    </Typography>
    <Button
    sx={{
      borderRadius: "8px",
      paddingY: "8px",
      paddingX: "12px",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "none",
      "&.Mui-disabled": {
        opacity: "0.3",
        backgroundColor: "primary.main",
        color: "white",
      },
    }}
    variant="contained"
    color="primary"
    disableElevation
    disableFocusRipple
    disableRipple
  >
    Add donation type
  </Button>
</Box>
  )
}



export default donors

donors.PageLayout = FullLayout