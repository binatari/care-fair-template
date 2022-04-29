import { Box, Typography } from "@mui/material";
import React from "react";
import { useLoginProvider } from "../context/LoginProvider";

const ReviewBox = ({ head1, head2, head3, footer,chooseStep }) => {
  const { step, totalSteps, setLoginContext } = useLoginProvider();
  const handleClick = () =>{
    setLoginContext({step:chooseStep })
  }
  return (
    <Box
      sx={{
        py: "1em",
        px: "0.75em",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #E4E7EB",
        borderRadius: "8px",
      }}
    >
      <Box width={"50%"}>
        {head1 && <Typography variant="big" fontWeight={500}  component={'p'} mb={'0.6em'}>{head1}</Typography>}
        {head2 && <Typography variant='small' component={'p'} mb={'0.6em'}>{head2}</Typography>}
        {head3 && <Typography variant='small'  component={'p'} mb={'0.6em'}>{head3}</Typography>}
        {footer && <Typography variant='small'  component={'p'}>{footer}</Typography>}
      </Box>
      <Box>
      <i
        className="las la-pen la-md"
        style={{
          border: "1px solid #E4E7EB",
          borderRadius: "6px",
          padding: "0.5em",
          cursor: "pointer",
          color:'#66788A'
        }}
        onClick={handleClick}
      ></i>
      </Box>
     
    </Box>
  );
};

export default ReviewBox;
