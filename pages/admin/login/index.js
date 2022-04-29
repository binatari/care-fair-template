import {
  Alert,
  Box,
  FormControl,
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import React from "react";
import { useAuthProvider } from "../../../context/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import HelperText from "../../components/HelperText";
import { getCookie, onLogin, onRegister } from "../../../src/utils/adminQueries";
import { useLoginProvider } from "../../../context/LoginProvider";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string()
  .required('Password is mandatory')
  .min(8, 'Password must be at least 8 characters long'),
  checkbox: yup.boolean().notRequired()
}).required();

const index = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false);
  const {setLoginContext} = useLoginProvider()
  const {
    mutate,
    isLoading,
    isSuccess,
    error,
    isError,
    data,
  } = onLogin();

  React.useEffect(()=>{
    if(isSuccess){
      // setLoginContext({token:data.data.data.token})
      // localStorage.setItem('token', data.data.data.token)
      // router.push('/admin/overview')
      const {data:innerData} = data
      console.log(innerData)


      setCookie(null, 'userInfo', JSON.stringify(innerData.data), {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // Expires after a month
        sameSite: true,
      })
       localStorage.setItem('token', innerData.data.api_token)
      router.push('/admin/overview')
    }
    if(isError){
      console.log(error.message)
    }


  }, [isSuccess, isError])


  // for csrf implementation
  // React.useEffect(()=>{
  //   getCookie()
  // }, [])


  

  const all = useLoginProvider()
 
  const { control, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      password: "",
      email: "",
      checkbox: false
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = ({password, email, checkbox}) => {
    // if(checkbox){
    //   localStorage.setItem('email', email)
    // localStorage.setItem('password', password)
    // }
    console.log(password, email);
    mutate({ email, password, });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
     <Typography component={'h2'} variant="h2" textAlign={'center'} fontWeight={600} marginBottom='2em'>
       Login
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
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value, } }) => (
              <TextField
                onChange={onChange}
                size="small"
                // helperText={errors.email && <HelperText text={errors.email.message} />}
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
          <Typography variant="big" component={"p"} fontWeight="500">
            Password
          </Typography>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value, } }) => (
          <TextField
            placeholder="password"
            error={errors.password}
            // helperText={errors.password && <HelperText text={errors.password.message} />}
            sx={{
              border: "none",
              borderColor: "",
              fontSize: "14px",
              marginBottom: "0.5em",
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
            type={showPassword ? "text" : "password"}
            value={value}
            size="small"
            onChange={onChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          )}
          />
          <Box display="flex" justifyContent={'space-between'} alignItems='center' mb='2.2em'>
          <FormGroup sx={{ fontSize: "14px" }}>
          <Controller
            name="checkbox"
            control={control}
            render={({ field: { onChange, value, } }) => (
            <FormControlLabel
              sx={{
                fontSize: "14px",
                color: "grey.light",
                pt:"0.4em",
                "& .MuiFormControlLabel-label": {
                  fontSize: "14px",
                },
                "& svg": {
                  fontSize: "1.2rem",
                },
              }}
              control={<Checkbox onChange={onChange} checked={value} />}
              label={'Remember Me'}
            />
            )}
            />
          </FormGroup>
          <Link href="/reset" variant="big" style={{textDecoration:'none', marginTop:'0.4em', }}>
            Forgot password?
          </Link>
          </Box>
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
            Log in
          </Button>
        </form>
      </Box>
    </>
  );
};

export default index;
