import { Box } from "@mui/material";
import React from "react";
import CharityStep from "../../../components/register/onboarding/organization/CharityStep";
import HorizontalLinearStepper from "../../../components/Stepper";
const onboarding = () => {
  return (
    <Box
      minHeight="100vh"
      py={'5em'}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: 'linear-gradient(186.82deg, rgba(219, 229, 255, 0.6) -19.71%, rgba(213, 251, 232, 0.48) 102.01%), #FFFFFF;'
      }}
    >
      <Box width={"90%"}>
        <HorizontalLinearStepper />
      </Box>
        {/* <CharityStep/> */}
    </Box>
  );
};

export default onboarding;
