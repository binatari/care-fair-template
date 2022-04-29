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
  Button,
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
  onGetAllGivers,
  onGetGiverSubscription,
  onGetGiverSubscriptions,
  onGetParticularGiver,
} from "../../src/utils/adminQueries";
import CustomListItem from "../../components/CustomListItem";
import InfoPanel from "../../components/InfoPanel";
import InfoCard from "../../components/InfoCard";
const donations = () => {
  const [view, setView] = useState(false);
  const [givers, setGivers] = useState(null);
  const [giver, setGiver] = useState(null);
  const [statisticsState, setStatisticsState] = useState(null);
  const [subscriptionState, setSubscriptionState] = useState(null);
  const [subscriptionsState, setSubscriptionsState] = useState(null);
  const [id, setId] = useState("");
  const [value, setValue] = React.useState("1");

  const {
    data: giversData,
    isError: giversIsError,
    isSuccess: giversIsSuccess,
  } = onGetAllGivers();
  const {
    data: giverData,
    isError: giverIsError,
    isSuccess: giverIsSuccess,
  } = onGetParticularGiver(id);

  const {
    data: subscriptionData,
    isError: subscriptionError,
    isSuccess: subscriptionIsSuccess,
  } = onGetGiverSubscription(id);

  const {
    data: subscriptionsData,
    isError: subscriptionsError,
    isSuccess: subscriptionsIsSuccess,
  } = onGetGiverSubscriptions(id);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (giversIsSuccess) {
      const { data } = giversData;
      console.log(data);
      setGivers(data);
    }
    if (giversIsError) {
      console.log("err");
    }
  }, [giversIsError, giversIsSuccess]);

  useEffect(() => {
    if (giverIsSuccess) {
      const { data } = giverData;
      console.log(data);
      setGiver(data);
      console.log(giverData);
    }
    if (giverIsError) {
      console.log("err");
    }
  }, [giverIsError, giverIsSuccess]);

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
  }, [subscriptionError, subscriptionIsSuccess]);

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
                title="All care givers"
                titleTypographyProps={{ variant: "h6" }}
              />
              <TableBasic
                setValue={setId}
                Head={"All caregivers"}
                columns={columns}
                rows={givers}
              />
            </Card>
          ) : (
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Box display="flex">
                  <ListItemAvatar>
                    <Avatar alt={`Avatar n°`} src={giver?.profile_photo_url} />
                  </ListItemAvatar>
                  <Box>
                    <ListItemText primary={giver?.name} />
                    <ListItemText primary={giver?.date_joined} />
                  </Box>
                </Box>
                <Box display="flex">
                  <Button
                    sx={{
                      textTransform: "none",
                      backgroundColor:'primary.blue',
                      mr:'0.5em'
                    }}
                    variant="contained"
                    // color="primary"
                    disableElevation
                    disableFocusRipple
                    disableRipple
                  >
                    Accept in
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      backgroundColor:'rgba(65, 54, 241, 0.1)',
                      color:'primary.blue'
                    }}
                    variant="contained"
                    color="primary"
                    disableElevation
                    disableFocusRipple
                    disableRipple
                  >
                    Decline
                  </Button>
                </Box>
                {giver && (
                  <List>
                    <CustomListItem left={"Email"} right={giver?.email} />
                    <CustomListItem left={"Phone"} right={giver?.phone} />
                    <CustomListItem left={"Zip Code"} right={giver?.zip_code} />
                    {/* <CustomListItem left={'Email'} right={receiver.email}/> */}
                  </List>
                )}

                {
                  <List
                    sx={{ borderTop: "1px solid #DFE0EB", marginTop: "1.6em" }}
                  >
                    {/* <Typography variant="h6" fontWeight={600} py="0.85em">
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
                    /> */}
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
                          <Tab label={"Verification"} value={"2"} />
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
                        <InfoPanel
                          head={
                            <InfoCard
                              date={subscriptionState?.ends_at}
                              text={subscriptionState?.plan?.name}
                            />
                          }
                          items={subscriptionsState}
                        />
                      </TabPanel>
                      <TabPanel value="2">
                        <InfoPanel
                          head={
                            <InfoCard
                              date={subscriptionState?.ends_at}
                              text={subscriptionState?.plan?.name}
                            />
                          }
                          items={subscriptionsState}
                        />
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
