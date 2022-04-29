import { Box, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({date, text}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#4136F1",
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
      color="white"
    >
      <Box display={"flex"} justifyContent="space-between">
        <Typography
          fontSize={"16px"}
          lineHeight="20px"
          color={"grey.dark"}
          mb="1em"
        >
        Current Plan
        </Typography>
        <Typography
          fontSize={"16px"}
          lineHeight="20px"
          color={"grey.dark"}
          mb="1em"
        >
          {date && date}
        </Typography>
      </Box>
      <Typography variant="h4"  fontWeight={700}>
      {text && text}
      </Typography>
    </Box>
  );
};
export default InfoCard;
