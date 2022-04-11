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
import PlatformStep from "../../../components/register/onboarding/organization/PlatformStep";
import PayoutStep from "../../../components/register/onboarding/organization/PayoutStep";
import { AuthContextProvider } from '../../../context/AuthProvider';


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
      organizationLabel:'Charity',
      component: <CharityStep/>,
    },
    {
      role:'shared',
      individualLabel:'Your details',
      organizationLabel:'Representative',
      component: <RepresentativeStep/>,
    },
    {
      role:'organization',
      individualLabel:'',
      organizationLabel:'Platform',
      component: <PlatformStep/>,
    },
    // put two more organization steps here
    {
      role:'shared',
      individualLabel:'Payouts',
      organizationLabel:'Payouts',
      component: <PayoutStep/>,
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
    <>
      <Box width={"90%"} mx={'auto'} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <Typography component={'h2'} variant="h2" textAlign={'center'} fontWeight={600} marginBottom='2em'>
        Setup your donee account
      </Typography>
      <AuthContextProvider>
        <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} userType={userType} setUserType={setUserType} stepped={steps}/>
        </AuthContextProvider>
      </Box>
        {/* <CharityStep/> */}
    </>
  );
};

export default onboarding;
