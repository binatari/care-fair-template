import React, { useEffect } from "react";
import { useAuthProvider } from "../../../../context/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../../CustomInput";
import LinedBox from "../../../LinedBox";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  Typography,
} from "@mui/material";
import ReviewBox from "../../../ReviewBox";
import { useLoginProvider } from "../../../../context/LoginProvider";
import NextButton from "../../NextButton";
import { onBoard } from "../../../../src/utils/queries";
import { useRouter } from "next/router";


const Text = (props) => {
  return (
    <>
      <Typography variant="small" component={"p"}>
        By submitting this information, I agree to the <Link>iDonatio Platform</Link> 
        Agreement, to receiving autodialled text messages, and certify that the
        information I have provided is complete and correct.
      </Typography>
    </>
  );
};

const ReviewStep = () => {
  const router = useRouter();
    const [value, setValue] = React.useState(false);
    const handleCheck = (event) => {
        setValue(event.target.checked);
      };
  const {
    setAuthContext,
    organization,
   
    first_name,
    date_of_birth,
    last_name,
    job_title,
    address_line_1,
    address_line_2,
    postal_code,
    phone_number,
    city,
  } = useAuthProvider();

  const all=useAuthProvider()
  const { step, totalSteps,  setLoginContext, token} = useLoginProvider();

  // console.log(totalSteps, all);

  const {
    mutate: onBoardMutate,
    isLoading: onBoardLoading,
    isError: onBoardError,
    error,
    isSuccess: onBoardSuccess,
    data: onBoardData,
  } = onBoard()


  useEffect(()=>{
    if(onBoardSuccess){
     console.log(onBoardData)
    }

    if(onBoardError){
      console.log(error)
    }

  }, [onBoardError, onBoardSuccess,])

  const handleSubmit = (e) =>{
    e.preventDefault()
    const finalResponse = {...all, is_onboarded:true}
    delete finalResponse.setAuthContext
    delete finalResponse.email
    console.log(finalResponse)
     onBoardMutate({finalResponse,token })
  }
  return (
    <>
      <Typography variant="big" mb="1.5em" component={"p"}>
        You’re almost ready to start using your iDonatio donee account. Please
        review the information you provided to make sure it’s correct before
        proceeding.
      </Typography>

      {organization && (
        <>
          <Typography
            variant="small"
            mb="1.5em"
            component={"p"}
            color="grey.main"
            fontWeight={500}
          >
            CHARITY
          </Typography>
          <ReviewBox
            head1={organization?.name}
            head2={`Registration: ${organization?.registration_number}`}
            head3={`${organization.address_line_1} ${organization?.city} ${organization?.postal_code}`}
            footer={organization?.website}
            chooseStep={0}
          />
        </>
      )}
      <Typography
        variant="small"
        my="1.5em"
        component={"p"}
        color="grey.main"
        fontWeight={500}
      >
        {totalSteps > 3 ? "REPRESENTATIVE" : "YOUR DETAILS"}
      </Typography>
      <ReviewBox
        head1={`${first_name} ${last_name}`}
        head2={job_title}
        head3={`${address_line_1} ${city} ${postal_code}`}
        footer={phone_number}
        chooseStep={totalSteps > 3 ? 1 : 0}
      />
      <Typography
        variant="small"
        my="1.5em"
        component={"p"}
        color="grey.main"
        fontWeight={500}
      >
        PAYOUTS
      </Typography>
      <ReviewBox
        head1={"HSBC UK"}
        head2={"GBP-British Pound"}
        head3={`${date_of_birth}`}
        footer={phone_number}
        chooseStep={totalSteps > 3 ? 3 : 1}
      />
      <form onSubmit={handleSubmit}>
      <FormGroup sx={{ fontSize: "14px" }}>
        <FormControlLabel
          sx={{
            fontSize: "14px",
            color: "grey.light",
            py: "2em",
            "& .MuiFormControlLabel-label": {
              fontSize: "14px",
              alignItems: "flex-start",
            },
            "&.MuiFormControlLabel-root": {
              alignItems: "flex-start",
            },
            "& svg": {
              fontSize: "1.2rem",
            },
          }}
          control={<Checkbox checked={value} onChange={handleCheck} />}
          label={<Text />}
        />
      </FormGroup>
      <NextButton disabled={!value} finalStep={true} />
      </form>
    </>
  );
};

export default ReviewStep;
