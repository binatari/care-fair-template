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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HelperText from "../../../components/HelperText";
import { onLogin, onRegister } from "../../../src/utils/agencyQueries";
import { useLoginProvider } from "../../../context/LoginProvider";
import { useRouter } from "next/router";
import CustomInput from "../../../components/CustomInput";

const schema = yup
  .object({
    email: yup.string().email().required(),
    passwordText1: yup
      .string()
      .required("Password is mandatory")
      .min(8, "Password must be at least 8 char long"),
    passwordText2: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("passwordText1")], "Passwords must and should match"),
    name: yup.string().required("Please input name"),
    website: yup.string().required("Please input website"),
    phone: yup.string().required("Please input a phone number"),
  })
  .required();


const index = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState({
    password1: false,
    password2: false,
  });

  const {
    mutate: RegisterMutate,
    isLoading: registerLoading,
    isSuccess: registerSuccess,
    error,
    isError,
    data: registerData,
  } = onRegister();

  const { setLoginContext } = useLoginProvider();

  const all = useLoginProvider();
  React.useEffect(() => {
    if (registerSuccess) {
      console.log('success')
      // setLoginContext({ token: registerData.data.data.token });
      localStorage.setItem('agencyToken', registerData.data.data.api_token)
      router.push("/agency/care-givers");
    }
    if (isError) {
      console.log(error.message);
    }
  }, [registerSuccess, isError]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      passwordText1: "",
      passwordText2: "",
      email: "",
      name:'',
      website:'',
      phone:''
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(registerData);
  const onSubmit = ({ passwordText1, email, phone, name, website }) => {
    RegisterMutate({ email: email, password: passwordText1, phone:phone, name:name, website:website });
    console.log(passwordText1, email, phone, name, website)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography
        component={"h2"}
        variant="h4"
        textAlign={"center"}
        fontWeight={600}
        marginBottom="2em"
      >
        Create an agency account
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
        paddingY="2em"
        borderRadius={"16px"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="big" component={"p"} fontWeight="500">
            Agency name
          </Typography>
          <CustomInput
            control={control}
            id={"name"}
            error={errors.passwordText1}
          />
          <Typography variant="big" component={"p"} fontWeight="500">
            Agency website
          </Typography>
          <CustomInput
            control={control}
            id={"website"}
            error={errors.passwordText1}
          />
          <Typography variant="big" component={"p"} fontWeight="500">
            Phone number
          </Typography>
          <CustomInput
            control={control}
            id={"phone"}
            error={errors.passwordText1}
          />
          <Typography variant="big" component={"p"} fontWeight="500">
            Email Address
          </Typography>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                size="small"
                helperText={
                  errors.email && <HelperText text={errors.email.message} />
                }
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
                InputProps={{
                  endAdornment: !errors.email && (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="email format is good"
                        edge="end"
                        color="success"
                      >
                        <TaskAltRoundedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Typography variant="big" component={"p"} fontWeight="500">
            Password
          </Typography>
          <Typography variant="small" component={"span"}>
            Must be a minimum of 8 characters and include a mix of numbers,
            letters and symbols.
          </Typography>
          <Controller
            name="passwordText1"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                placeholder="Password"
                error={errors.passwordText1}
                helperText={
                  errors.passwordText1 && (
                    <HelperText text={errors.passwordText1.message} />
                  )
                }
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
                type={showPassword.password1 ? "text" : "password"}
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
                          setShowPassword({
                            ...showPassword,
                            password1: !showPassword.password1,
                          })
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword.password1 ? (
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
          <Controller
            name="passwordText2"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                placeholder="Repeat Password"
                error={errors.passwordText2}
                helperText={
                  errors.passwordText2 && (
                    <HelperText text={errors.passwordText2.message} />
                  )
                }
                sx={{
                  border: "none",
                  borderColor: "",
                  fontSize: "14px",
                  mb: "14px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey.border40",
                      fontSize: "14px",
                    },
                    "&:hover fieldset": {
                      borderColor: "grey.border40",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
                type={showPassword.password2 ? "text" : "password"}
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
                          setShowPassword({
                            ...showPassword,
                            password2: !showPassword.password2,
                          })
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword.password2 ? (
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
            endIcon={<ArrowForwardIcon />}
          >
            Create account
          </Button>
        </form>
      </Box>
    </>
  );
};

export default index;
