import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from '@mui/icons-material/Check';
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import CharityStep from "./register/onboarding/organization/CharityStep";
import RepresentativeStep from "./register/onboarding/organization/RepresentativeStep";

const steps = [
  "Charity",
  "Representative",
  "Platform",
  "Payouts",
  "Review and Submit"
];

const SVG = ({active, completed, index}) => {
    return (
      <Box bgcolor={active?'primary.light': completed?'success.light':'grey.border30'} borderRadius='4px' justifyContent={'center'} alignItems={'center'} display='flex' color={active?'white':completed?'success.dark':'grey.light'}>
        {active ? ( <Typography variant="small" color={'primary.dark'} px='0.6em' fontWeight={600}>{index + 1}</Typography>):completed?(<CheckIcon fontSize="14px"/>):(<Typography variant="small" color={'grey.light'} px='0.6em' fontWeight={600}>{index + 1}</Typography>)}
      </Box>
    );
  };

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", display:'flex', alignItems:'center', flexDirection:'column' }}>
      <Stepper activeStep={activeStep} sx={{justifyContent:'center', marginBottom:"1.5em"}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          //code for optional steps
          //   if (isStepOptional(index)) {
          //     labelProps.optional = (
          //       <Typography variant="caption">Optional</Typography>
          //     );
          //   }

          if (index < activeStep){
              stepProps.completed = true
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step
              key={label}
              {...stepProps}
              sx={{
                "& .MuiStepLabel-label ": {
                    fontWeight:'500',
                  },
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "grey.light",
                  // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "grey.light",

                     // Just text label (COMPLETED)
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "primary.main", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                  {
                    color: "primary.main", // Just text label (ACTIVE)
                  },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "black", // circle's number (ACTIVE)
                },
              }}
            >
              <StepLabel
                icon={<SVG active={index === activeStep} completed={stepProps.completed} index={index}/>}
                {...labelProps}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {
          activeStep === 0?(<CharityStep/>):(<RepresentativeStep/>)
          
      }
      
    </Box>
  );
}
