import { Grid3x3 } from '@mui/icons-material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import FullLayout from "../../components/layouts/FullLayout";
const donationTypes = () => {
  return (
    <Box>
        <Box display='flex' justifyContent={'space-between'} alignItems='center'  mb='2em'>
            <Typography variant='h4' component={'h2'} >
                Donation types
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
        <Grid container>
            <Grid>

            </Grid>
        </Grid>
    </Box>
  )
}

export default donationTypes

donationTypes.PageLayout = FullLayout
