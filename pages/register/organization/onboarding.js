import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HorizontalLinearStepper from "../../../components/Stepper";
import { useRouter } from "next/router";
import { SettingsRemoteSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from '@mui/icons-material/Check';
import CharityStep from "../../../components/register/onboarding/organization/CharityStep";
import RepresentativeStep from "../../../components/register/onboarding/organization/RepresentativeStep";


const onboarding = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState([]);
  const [userType, setUserType] =  React.useState('')
  console.log(steps)
  const router = useRouter();


  const components = [
    {
      role:'organization',
      individualLabel:'',
      organizationLabel:'',
      component: <CharityStep/>,
    },
    {
      role:'shared',
      individualLabel:'',
      organizationLabel:'',
      component: <RepresentativeStep/>,
    },
    // put two more organization steps here
    {
      role:'shared',
      individualLabel:'Payouts',
      organizationLabel:'Payouts',
      component: <Button>goal</Button>,
    },
    {
      role:'shared',
      individualLabel:'Review and submit',
      organizationLabel:'Review and submit',
      component: <Button>game</Button>,
    },
  
  ];

  const filterComponents = (element) =>{
    const user = localStorage.getItem('userType')
    if(element.role === user || element.role ===  'shared'){
      return element
    }
  }
  
  useEffect(()=>{
    const getType = localStorage.getItem('userType')
    if(!getType){
      router.push('/register')
      return
    }

    setUserType(getType)
    const result = components.filter(filterComponents)
    setSteps(result)
    console.log(result)
  }, [])

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
        <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} userType={userType} setUserType={setUserType} stepped={steps}/>
      </Box>
        {/* <CharityStep/> */}
    </Box>
  );
};

export default onboarding;
