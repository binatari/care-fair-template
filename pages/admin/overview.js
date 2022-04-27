import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ActivityCard from "../../components/ActivityCard";
import AgencySummaryCard from "../../components/AgencySummaryCard";
import Card from "../../components/Card";
import FullLayout from "../../components/layouts/FullLayout";
import ListCard from "../../components/ListCard";

const WelcomeCard = () => {
  return (
    <Box
      sx={{
          background:'url(/sheet.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center'
      }}
      borderRadius={"0.5em"}
      pt="1em"
      pb="1.5em"
      px="4em"
      border={"1px solid #DFE0EB"}
      height="100%"
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      color='white'
    >
      <Typography
        fontSize={"16px"}
        lineHeight="20px"
        color={"grey.dark"}
        mb="1em"
      >
     Hi Admin, Good Evening
      </Typography>
      <Typography fontSize={"15px"} lineHeight="20.49px" fontWeight={700}>
      Here are your 
statistics as of this moment.
      </Typography>
    </Box>
  );
};
const overview = () => {
  const arr = [
    {
      headers: "Total caregivers",
      //   body: total_givers,
      body: 0,
    },
    {
      headers: "Total carereceivers",
      //   body: total_receivers || 1,
      body: 10,
    },
    {
      headers: "Total agencies",
      //   body: total_agencies || 5,
      body: 50,
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <WelcomeCard />
        </Grid>
        {arr.map(({ headers, body }) => (
          <Grid item xs={12} md={3}>
            <Card Header={headers} body={body} />
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <ListCard />
        </Grid>
        <Grid item xs={12} md={6}>
        <ListCard />
        </Grid>
        <Grid item xs={12} md={8}>
        <ActivityCard />
        </Grid>
        <Grid item xs={12} md={4}>
        <AgencySummaryCard />
        </Grid>
      </Grid>

    </>
  );
};
overview.PageLayout = FullLayout;
export default overview;
