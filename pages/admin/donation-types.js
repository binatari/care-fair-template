import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import FullLayout from "../../components/layouts/FullLayout";
import { useLoginProvider } from "../../context/LoginProvider";
import { onGetDonations, onGetDonationTypes } from "../../src/utils/queries";
import { useRouter } from "next/router";
import SideNav from "../../components/SideNav";
import DonationTypeCard from "../../components/DonationTypeCard";
const donationTypes = () => {
  const [filter, setFilter] = useState('all')
  const { token } = useLoginProvider();
  // const {
  //   data:loginData, error:loginError, isSuccess:loginSuccess
  // } = onGetDonations(token)
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const { isLoading, isSuccess, error, isError, data } =
    onGetDonationTypes(token);


  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      if(filter === "all"){
        setTypes(data.data.data);
        return
      }
      if(filter === "active"){
        const filtered = data.data.data.filter(activeFilter)
        setTypes(filtered);
        return
      }
      if(filter === "inactive"){
        const filtered = data.data.data.filter(inActiveFilter)
        setTypes(filtered);
        return
      }
    }
  }, [filter]);


  const activeFilter = (data) =>{
    return data.is_active === true
  }


  const inActiveFilter = (data) =>{
    return data.is_active === false
  }
  // useEffect(()=>{
  //   console.log(loginData)
  // }, [loginSuccess])

  useEffect(() => {
    if (isSuccess) {
      console.log(data.data);
      setTypes(data.data.data);
    }
    if (isError) {
      console.log(error.response, error);
    }
    //put the dependencies in later
  }, [isSuccess, isError]);
  return (
    <Box alignItems="center" display={'flex'} flexDirection='column'>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        width='100%'
        mb="2em"
      >
        <Typography variant="h4" component={"h2"}>
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
      <Grid item xs={12} md={4} lg={1}>
      
      </Grid>
      <SideNav setOpen={setOpen} open={open}/>
    </Grid>
      <Box display={"flex"}   width='100%' mb='1.5em'>
        <Chip
          label="All"
          size="small"
          variant="outlined"
          sx={{borderColor: filter === 'all'?'primary.main':'grey.border30', color:filter === 'all'&&'primary.main'  ,ml:"4px"}}
          clickable
          onClick ={()=>setFilter('all')}
        />
        <Chip
          label="Active "
          size="small"
          variant="outlined"
          sx={{borderColor: filter === 'active'?'primary.main':'grey.border30', color:filter === 'active'&&'primary.main', ml:"4px"}}
          clickable
          onClick ={()=>setFilter('active')}
        />
         <Chip
          label="Inactive"
          size="small"
          variant="outlined"
          sx={{borderColor: filter === 'inactive'?'primary.main':'grey.border30', color:filter === 'inactive'&&'primary.main', ml:"4px"}}
          clickable
          onClick ={()=>setFilter('inactive')}
        />
      </Box>
      <Box display="flex" flexWrap={"wrap"} >
        {types.map((type) => (
          <DonationTypeCard {...type} setOpen={setOpen}/>
        ))}
      </Box>
    </Box>
  );
};

export default donationTypes;

donationTypes.PageLayout = FullLayout;
