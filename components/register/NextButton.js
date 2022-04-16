import { Button } from '@mui/material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from 'react'
import { useLoginProvider } from '../../context/LoginProvider';

const NextButton = ({disabled, finalStep=false}) => {
    //const {step, totalSteps, setLoginContext}= useLoginProvider()
    // const handleNext = () => {
    //    if(totalSteps && step < totalSteps){
    //        setLoginContext({step:step + 1 })
    //        console.log(step)
    //    }
    //   };
    // console.log(step)
    //   const handleBack = () => {
    //     if(totalSteps && step > 0){
    //         setLoginContext({step:step - 1 })
    //     }
    //   };
    
    
  return (
    <Button
    type='submit'
    disabled={disabled}
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
    variant="contained"
    color="primary"
    disableElevation
    disableFocusRipple
    disableRipple
    endIcon={!finalStep && <ArrowForwardIcon/>}
  >
    {finalStep? 'Complete setup': 'Next' }
  </Button>
  )
}

export default NextButton