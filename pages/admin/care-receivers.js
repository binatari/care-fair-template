import React, { useEffect, useState } from "react";
import FullLayout from "../../components/layouts/FullLayout";
// ** MUI Imports
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import TableBasic from "../../components/Table";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "../../components/Tabs";
import {
  onGetAllReceivers,
  onGetParticularReceiver,
  onGetReceiverStatistics,
  onGetReceiverSubscription,
  onGetReceiverSubscriptions,
} from "../../src/utils/adminQueries";
import CustomListItem from "../../components/CustomListItem";
import { SetMealSharp } from "@mui/icons-material";
import InfoPanel from "../../components/InfoPanel";
import InfoCard from "../../components/InfoCard";
const donations = () => {
  const [view, setView] = useState(false);
  const [receivers, setReceivers] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [statisticsState, setStatisticsState] = useState(null);
  const [subscriptionState, setSubscriptionState] = useState(null);
  const [subscriptionsState, setSubscriptionsState] = useState(null);
  const [id, setId] = useState("");
  const [value, setValue] = React.useState("1");

  const {
    data: receiversData,
    isError: receiversIsError,
    isSuccess: receiversIsSuccess,
  } = onGetAllReceivers();
  const {
    data: receiverData,
    isError: receiverIsError,
    isSuccess: receiverIsSuccess,
  } = onGetParticularReceiver(id);
  const {
    data: statistics,
    isError: statisticsError,
    isSuccess: statisticsIsSuccess,
  } = onGetReceiverStatistics(id);

  const {
    data: subscriptionData,
    isError: subscriptionError,
    isSuccess: subscriptionIsSuccess,
  } = onGetReceiverSubscription(id);

  const {
    data: subscriptionsData,
    isError: subscriptionsError,
    isSuccess: subscriptionsIsSuccess,
  } = onGetReceiverSubscriptions(id);


  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (receiversIsSuccess) {
      const { data } = receiversData;
      console.log(data);
      setReceivers(data);
    }
    if (receiversIsError) {
      console.log("err");
    }
  }, [receiversIsError, receiversIsSuccess]);

  useEffect(() => {
    if (receiverIsSuccess) {
      const { data } = receiverData;
      console.log(data);
      setReceiver(data);
      console.log(receiverData);
    }
    if (receiverIsError) {
      console.log("err");
    }
  }, [receiverIsError, receiverIsSuccess]);

  useEffect(() => {
    if (statisticsIsSuccess) {
      console.log("statistics");
      const { data } = statistics;
      console.log(data);
      setStatisticsState(data);
      // console.log()
    }
    if (statisticsError) {
      console.log("err");
    }
  }, [statisticsError, statisticsIsSuccess]);

  useEffect(() => {
    if (subscriptionIsSuccess) {
      const { data } = subscriptionData;
      console.log(data);
      setSubscriptionState(data);
      // console.log()
    }
    if (subscriptionError) {
      console.log("err");
    }
  }, [subscriptionError, subscriptionIsSuccess, subscriptionData]);


  useEffect(() => {
    if (subscriptionsIsSuccess) {
      const { data } = subscriptionsData;
      console.log(data);
      setSubscriptionsState(data);
      // console.log()
    }
    if (subscriptionsError) {
      console.log("err");
    }
  }, [subscriptionsError, subscriptionsIsSuccess]);

  const columns = [
    "Caretakers names",
    "Email address",
    "Phone number",
    "Zip-code",
    "Date joined",
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {!id ? (
            <Card>
              <CardHeader
                title="All care receivers"
                titleTypographyProps={{ variant: "h6" }}
              />
              <TableBasic
                setValue={setId}
                Head={"All carereceivers"}
                columns={columns}
                rows={receivers}
              />
            </Card>
          ) : (
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Box display="flex">
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°`}
                      src={receiver?.profile_photo_url}
                    />
                  </ListItemAvatar>
                  <Box>
                    <ListItemText primary={receiver?.name} />
                    <ListItemText primary={receiver?.date_joined} />
                  </Box>
                </Box>
                {receiver && (
                  <List>
                    <CustomListItem left={"Email"} right={receiver?.email} />
                    <CustomListItem left={"Phone"} right={receiver?.phone} />
                    <CustomListItem left={"Zip Code"} right={receiver?.email} />
                    {/* <CustomListItem left={'Email'} right={receiver.email}/> */}
                  </List>
                )}

                {
                  <List
                    sx={{ borderTop: "1px solid #DFE0EB", marginTop: "1.6em" }}
                  >
                    <Typography variant="h6" fontWeight={600} py="0.85em">
                      statistics
                    </Typography>
                    <CustomListItem
                      left={"Jobs Posted"}
                      right={statisticsState?.total_jobs}
                    />
                    <CustomListItem
                      left={"Bookings made"}
                      right={statisticsState?.total_bookings}
                    />
                    <CustomListItem
                      left={"Completed"}
                      right={statisticsState?.total_completed_jobs}
                    />
                  </List>
                }
              </Grid>
              <Grid item xs={12} md={8} component="Paper">
                <Paper sx={{ p: "3em" }}>
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                      <Box>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          {/* {tabRows &&
              tabRows.map((tabRow, i) => (
                <>
                  <Tab label={`${tabRow.name}`} value={`${i}`} />
                </>
              ))} */}
                          <Tab label={"Subscription"} value={"1"} />
                          {/* <Tab label={'Checkins'} value={'1'} /> */}
                        </TabList>
                      </Box>
                      {/* {
          tabRows&& tabRows.map((tabRow)=>(
            <TabPanel value="1">
           
          </TabPanel>
          ))
        } */}
                      <TabPanel value="1">
                        <InfoPanel head={<InfoCard date={subscriptionState?.ends_at} text={subscriptionState?.plan?.name}/>} items={subscriptionsState} />
                      </TabPanel>
                      {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
                    </TabContext>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
donations.PageLayout = FullLayout;
export default donations;
