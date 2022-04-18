import { Box, Chip, Paper, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const DonationTypeCard = ({
  created_at = false,
  description = false,
  donation_details = false,
  gift_aid_eligible = false,
  type = false,
  is_active = false,
  setOpen
}) => {
  const handleClick = () => {
    console.log("click");
    setOpen(true)
  };
  return (
    <Paper
      sx={{
        p: "1.5em",
        maxWidth: "25rem",
        cursor: "pointer",
        width: {
          xs: "100%",
          md: "30%",
          lg: "30%",
        },
        mr:'1.5em',
        mb:"1.5em"
      }}
      onClick={handleClick}
    >
      <Typography variant="h4">{type}</Typography>
      <Box display="flex">
        <Chip
          label={is_active ? "ACTIVE" : "INACTIVE"}
          size="small"
          sx={{
            bgcolor: is_active ? "success.light" : "warning.light",
            color: is_active ? "success.dark" : "warning.dark",
            fontWeight: "600",
            borderRadius: "4px",
            fontSize: "10px",
            mr: "4px",
          }}
        />
        {gift_aid_eligible && (
          <Chip
            label="gift aid eligible"
            size="small"
            sx={{ fontWeight: "600", borderRadius: "4px", fontSize: "10px" }}
          />
        )}
      </Box>
      <Typography
        variant="big"
        fontWeight={400}
        my="1em"
        component={"p"}
        textTransform="capitalize"
      >
        {description && description}
      </Typography>
      <Box display={"flex"} mb="1.25em">
        <Box width="50%" borderRight="1px solid" borderColor={"grey.border30"}>
          <Typography variant="small">Total donation amt</Typography>
          <Typography variant="h4" fontWeight={500} color="success.dark">
            {donation_details.length > 0
              ? donation_details[0].total_donation_amount
              : 0}
          </Typography>
        </Box>
        <Box width="50%" pl={"1em"}>
          <Typography variant="small">No. of donations</Typography>
          <Typography variant="h4" fontWeight={500}>
            {donation_details.length > 0
              ? donation_details[0].number_of_donations
              : 0}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="small"
        borderTop="1px solid"
        borderColor={"grey.border30"}
        pt="0.75em"
      >
        Created {moment(created_at).format("DD MMMM YYYY")}
      </Typography>
    </Paper>
  );
};

export default DonationTypeCard;
