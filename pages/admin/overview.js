import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCard";
import AgencySummaryCard from "../../components/AgencySummaryCard";
import Card from "../../components/Card";
import FullLayout from "../../components/layouts/FullLayout";
import ListCard from "../../components/ListCard";
import nookies from 'nookies'
import { onGetActivityTimeline, onGetRecentAgencies, onGetRecentGivers, onGetRecentReceivers, onGetStatisticsOverview } from "../../src/utils/adminQueries";
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
  const [overview, setOverview] = useState(null)
  const [receiver, setReceiver] = useState(null)
  const [giver, setGiver] = useState(null)
  const [agencies, setAgencies] = useState(null)
  const [activity, setActivity] = useState(null)

  const {data:overviewData, isError:overviewIsError, isSuccess:overviewIsSuccess} = onGetStatisticsOverview()
  const {data:receiverData, isError:receiverIsError, isSuccess:receiverIsSuccess} = onGetRecentReceivers()
  const {data:giverData, isError:giverIsError, isSuccess:giverIsSuccess} =  onGetRecentGivers()
  const {data:agenciesData, isError:agenciesIsError, isSuccess:agenciesIsSuccess} = onGetRecentAgencies()
  const {data:activityData, isError:activityIsError, isSuccess:activityIsSuccess} =  onGetActivityTimeline()

  useEffect(() => {
    console.log('a')
    if(overviewIsSuccess){
      console.log(overviewData)
      const {data} = overviewData
      setOverview(data)
    }
    if(overviewIsError){
      console.log('err')
    }
    
  }, [overviewIsError, overviewIsSuccess])
  
  useEffect(() => {
    console.log('a')
    if(receiverIsSuccess){
      const {data} = receiverData
      setReceiver(data)
      console.log(receiverData)
    }
    if(receiverIsError){
      console.log('err')
    }
    
  }, [receiverIsError, receiverIsSuccess])
  
  useEffect(() => {
    console.log('a')
    if(giverIsSuccess){

      console.log(giverData)
      const {data} = giverData
      setGiver(data)
    }
    if(giverIsError){
      console.log('err')
    }
    
  }, [giverIsError, giverIsSuccess])
  
  useEffect(() => {
    if(agenciesIsSuccess){
      const {data} = agenciesData
      setAgencies(data)
    }
    if(agenciesIsError){
      console.log('err')
    }
    
  }, [agenciesIsError, agenciesIsSuccess])

  useEffect(() => {
    if(activityIsSuccess){
      const {data} = activityData
      setActivity(data)
      console.log(activityData)
    }
    if(activityIsError){
      console.log('err')
    }
    
  }, [activityIsError, activityIsSuccess])
  
  
  const arr = [
    {
      headers: "Total caregivers",
       body: overview?.total_givers,
    },
    {
      headers: "Total carereceivers",
      //   body: total_receivers || 1,
      body: overview?.total_receivers,
    },
    {
      headers: "Total agencies",
      //   body: total_agencies || 5,
      body:overview?.total_agencies,
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
          <ListCard Head={'Recent  Care receivers'} subHead={'Care receivers'} items={receiver}/>
        </Grid>
        <Grid item xs={12} md={6}>
        <ListCard Head={'Recent  Care Givers'} subHead={'Care Givers'} items={giver}  />
        </Grid>
        <Grid item xs={12} md={8}>
        <ActivityCard Head={'Activity Timeline'} items={activity}  emptyList={'No recent Activity'}  />
        </Grid>
        <Grid item xs={12} md={4}>
        <AgencySummaryCard Head={'Recent Agency'} agencies={agencies}/>
        </Grid>
      </Grid>

    </>
  );
};
overview.PageLayout = FullLayout;
export default overview;


// export async function getServerSideProps(ctx) {

//   const cookies = nookies.get(ctx)
//   console.log(cookies)
//   if(!cookies){
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//   // Destroy
//   // nookies.destroy(ctx, 'cookieName')

//   return {
//     props:{cookies}
//   }
// }
