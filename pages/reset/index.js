import {
    Box,
    Button,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useForm, Controller } from "react-hook-form";
  import { yupResolver } from '@hookform/resolvers/yup';
  import * as yup from "yup";
  import HelperText from "../../components/HelperText";
  import { requestOtp } from "../../src/utils/queries";
  import { useRouter } from "next/router";
import { useLoginProvider } from "../../context/LoginProvider";
  
  const schema = yup.object({
    email: yup.string().email('Please enter a valid email').required(),
  }).required();
  
  const index = () => {
    const router = useRouter()

    const{setLoginContext}= useLoginProvider()
  
    const {
      mutate,
      isLoading,
      isSuccess,
      error,
      isError,
      data,
    } = requestOtp();
  
    React.useEffect(()=>{
      if(isSuccess){
        router.push('/reset/verification')
      }
      if(isError){
        console.log(error.message)
      }
  
  
    }, [isSuccess, isError])

   
    const { control, handleSubmit, formState: { errors, isValid }, } = useForm({
      defaultValues: {
        email: "",
      },
      resolver: yupResolver(schema),
      mode: 'onChange',
    });
    const onSubmit = ({email}, e) => {
    e.preventDefault()
    setLoginContext({email})
      mutate({email});
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    return (
      <>
       <Typography component={'h2'} variant="h2" textAlign={'center'} fontWeight={600} marginBottom='2em'>
         Forgot Password
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
          paddingY="4em"
          borderRadius={"16px"}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="big" component={"p"} fontWeight="500">
              Email Address
            </Typography>
            <Typography variant="small" component={"p"} fontWeight="500">
            Enter your registered email address below to receive instructions on how to reset your password.
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value, } }) => (
                <TextField
                  onChange={onChange}
                  size="small"
                  helperText={errors.email && <HelperText text={errors.email.message} />}
                  value={value}
                  fullWidth
                  error={errors.email}
                  sx={{
                    border: "none",
                    borderColor: "",
                    fontSize: "14px",
                    marginBottom: "2em",
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
                  // InputProps={{
                  //   endAdornment: !errors.email && (
                  //     <InputAdornment position="end">
                  //       <IconButton
                  //         aria-label="email format is good"
                  //         edge="end"
                  //         color="success"
                  //       >
                  //         <TaskAltRoundedIcon />
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              )}
            />
            <Button
              fullWidth
              disabled={!isValid}
              type="submit"
              sx={{
                borderRadius: "8px",
                paddingY: "8px",
                paddingX: "12px",
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
            >
              Send verification code
            </Button>
          </form>
        </Box>
      </>
    );
  };
  
  export default index;
  