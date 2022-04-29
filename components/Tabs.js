import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import InfoPanel from "./InfoPanel";
export default function Tabs({ tabRows }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* {tabRows &&
              tabRows.map((tabRow, i) => (
                <>
                  <Tab label={`${tabRow.name}`} value={`${i}`} />
                </>
              ))} */}
              <Tab label={'Subscription'} value={'1'} />
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
           <InfoPanel />
         </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}
