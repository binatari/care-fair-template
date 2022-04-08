import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from '@mui/icons-material/Check';
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const SVG = ({active, completed, index}) => {
    return (
      <Box bgcolor={active?'primary.light': completed?'success.light':'grey.border30'} borderRadius='4px' justifyContent={'center'} alignItems={'center'} display='flex' color={active?'white':completed?'success.dark':'grey.light'}>
        {active ? ( <Typography variant="small" color={'primary.dark'} px='0.6em' fontWeight={600}>{index + 1}</Typography>):completed?(<CheckIcon fontSize="14px"/>):(<Typography variant="small" color={'grey.light'} px='0.6em' fontWeight={600}>{index + 1}</Typography>)}
      </Box>
    );
  };

export default function HorizontalLinearStepper({activeStep, setActiveStep, userType, setUserType, stepped}) {
  const [skipped, setSkipped] = React.useState(new Set());
  
  const isStepOptional = (step) => {
    return step === 1;
  };


  React.useEffect(()=>{
    console.log(stepped)
  }, [stepped])

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


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", display:'flex', alignItems:'center', flexDirection:'column' }}>
      <Stepper activeStep={activeStep} sx={{justifyContent:'center', marginBottom:"1.5em"}}>
        {stepped.map((label, index) => {
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
              key={index}
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
                {userType === 'individual'? label.individualLabel : label.organizationLabel}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box
      sx={{
        paddingX:{
          xs:'2.5em',
          sm:"4em",
          md:'4em'
        }
      }}
        bgcolor={"white"}
        maxWidth={"28rem"}
        width={"90%"}
       
        paddingY="2em"
        borderRadius={"16px"}
      >
      {
        stepped.map((teststep, i)=> activeStep === i && (
          teststep.component
        ))
      }
         <Box display={"flex"} justifyContent="flex-end">
          <Button
            sx={{
              borderRadius: "8px",
              paddingY: "8px",
              paddingX: "12px",
              mt: "2.5em",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "none",
              "&.Mui-disabled": {
                opacity: "0.3",
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
            onClick={handleNext}
            variant="contained"
            color="primary"
            disableElevation
            disableFocusRipple
            disableRipple
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Box>
      </Box>

      
    </Box>
  );
}
