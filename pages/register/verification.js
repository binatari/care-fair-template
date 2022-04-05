import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import AlertVerificationDialog from "../../components/verification/Modal";
const SVG = (props) => {
  return (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99769 0.00461361C2.68973 0.00461361 0 2.69435 0 6.00231C0 9.30565 2.68973 12 5.99769 12C9.30104 12 11.9954 9.30565 11.9954 6.00231H11.0727C11.0727 8.80738 8.80277 11.0773 5.99769 11.0773C3.188 11.0773 0.922722 8.80738 0.922722 6.00231C0.922722 3.19262 3.188 0.927336 5.99769 0.927336C7.78547 0.927336 9.34717 1.84083 10.2468 3.23414H7.83852V4.15686H11.5294V0.465975H10.6067V2.17762C9.50404 0.851211 7.84314 0 5.99308 0L5.99769 0.00461361Z"
          fill="#2962FF"
        />
      </svg>
    </>
  );
};
const verification = () => {
  return (
    <Box
      minHeight="100vh"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: 'linear-gradient(186.82deg, rgba(219, 229, 255, 0.6) -19.71%, rgba(213, 251, 232, 0.48) 102.01%), #FFFFFF;' }}
    >
      <Box
        sx={{
          paddingX: {
            xs: "2.5em",
            sm: "4em",
            md: "4em",
          },
        }}
        bgcolor={"white"}
        maxWidth={"30rem"}
        width={"90%"}
        paddingY="3em"
        borderRadius={"16px"}
      >
        <Typography variant="big" component={"p"}>
          We have sent a verification message to your email address.
          <br />
          <br />
          Click the link in the message to verify your email or enter the
          6-digit code we sent you below.
        </Typography>
        <TextField
          placeholder="6-digit verification code"
          id="verify"
          size="small"
          fullWidth
          sx={{
            border: "none",
            borderColor: "",
            fontSize: "14px",
            marginBottom: "1.5em",
            marginTop: "2em",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "grey.border40",
              },
              "&:hover fieldset": {
                borderColor: "grey.border40",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />
        <Button
          sx={{ textTransform: "none" }}
          startIcon={<SVG />}
          disableElevation
          disableFocusRipple
          disableRipple
        >
          Resend
        </Button>
        <Typography variant="small" component={"p"} sx={{marginBottom:'2em'}}>
          Please allow a few minutes for delivery and check the Junk / Spam
          folder of your email inbox before requesting a new code.
        </Typography>
       <AlertVerificationDialog/>
      </Box>
    </Box>
  );
};

export default verification;
