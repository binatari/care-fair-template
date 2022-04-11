import { Box, TextField, Typography, Button, Alert, AlertTitle, InputAdornment, IconButton } from "@mui/material";
import React from "react";
import AlertVerificationDialog from "../../components/verification/Modal";
import { useState, useEffect } from "react";
import { onVerify, onLogin } from "../../src/utils/queries";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [form, setForm] = useState("");
  const [otp, setOtp] = useState("12345");
  const [token, setToken] = useState("");
  const [retry, setRetry] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [errorStyles, setErrorStyles] = useState(false)
  console.log(errorStyles)

  const {
    mutate: verifyMutate,
    isLoading: verifyLoading,
    isSuccess: verifySuccess,
    data: verifyData,
    error: verifyError,
  } = onVerify();

  const {
    mutate: loginMutate,
    isLoading: loginLoading,
    isSuccess: loginSuccess,
    data: loginData,
  } = onLogin();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      loginMutate({ email: email, password: password });
      return;
    } else {
      router.push("/");
      return;
    }
  }, [retry]);

  // useEffect(()=>{
  //     const storedToken = localStorage.getItem('token')
  //     setToken(storedToken)
  //     mutate({storedToken, otp})
  // }, [])

  console.log()

  const handleForm = (e) => {
    e.preventDefault();
    setErrorStyles(false)
    if (form.length >= 6) {
      setForm(e.target.value.slice(0, 6));
      return;
    }
    setForm(e.target.value);
  };

  const handleClick = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (loginSuccess) {
      let token = loginData.data.data.token;
      loginMutate({ email: email, password: password });
      verifyMutate({ token, form });
      return;
    }
    setRetry(retry + 1);
  };

  useEffect(() => {
    

    if (verifySuccess) {
      setTimeout(()=>{
       router.push("/register/organization/verification");
      },2000)
     
    }

    if (verifyError) {
      setErrorStyles(true)
      console.log(verifyError);
    }
  }, [verifySuccess, verifyData, verifyError]);

  
  return (
    <>
     <Typography component={'h2'} variant="h2" textAlign={'center'} fontWeight={600} marginBottom='2em'>
      Verify your email address
      </Typography>
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
        {!verifySuccess ? (
             <>
          {(verifyError && errorStyles) && (
            <>
             <Alert
            icon={ <HighlightOffOutlinedIcon sx={{ color:'secondary.main' }} />}
            severity={ "error"}
            color={"error" }
            sx={{ borderRadius: "8px", fontSize: "14px", mb:'1em' }}
          >
            <AlertTitle sx={{color:'secondary.main' }}>
              Incorrect verification code
            </AlertTitle>
              "We couldn’t verify the code you entered. Check that you have entered the correct digits and try again."
          </Alert>
            </>
          )}
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
          onChange={handleForm}
          error={errorStyles}
          value={form}
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
          InputProps={{
            endAdornment: (verifyError && errorStyles) && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="error button"
                  edge="end"
                  color="error"
                >
                  <ErrorOutlineIcon color="error.main"/>
                </IconButton>
              </InputAdornment>
            ),
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
        <Typography
          variant="small"
          component={"p"}
          sx={{ marginBottom: "2em" }}
        >
          Please allow a few minutes for delivery and check the Junk / Spam
          folder of your email inbox before requesting a new code.
        </Typography>
        </>
        ):(
          <>
          <Alert
            icon={ <HighlightOffOutlinedIcon sx={{ color:'success.main' }} />}
            severity={ "success"}
            color={"success" }
            sx={{ borderRadius: "8px", fontSize: "14px" }}
          >
            <AlertTitle sx={{color:'success.main' }}>
            Email verified
            </AlertTitle>
            Your email address has been successfully verified. You can now proceed with setting up your donee account.
          </Alert>
          </>  )
        }
        <AlertVerificationDialog
          disabled={form}
          isShown={isShown}
          verified={verifySuccess}
          setIsShown={setIsShown}
          getCode={handleClick}
        />
      </Box>
    </>
  );
};

export default verification;
