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

const Text = (props) => {
  return (
    <>
      <Typography variant="small" component={'p'}>
        By creating an iDonatio account, I confirm that I have read, understood
        and accept the <Link>Terms of Service</Link> and <Link> Privacy Policy. </Link> 
      </Typography>
    </>
  );
};

const index = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(true);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      minHeight="100vh"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center",  background: 'linear-gradient(186.82deg, rgba(219, 229, 255, 0.6) -19.71%, rgba(213, 251, 232, 0.48) 102.01%), #FFFFFF;' }}
    >
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
        <Alert
          severity="error"
          color={"grey"}
          sx={{ marginBlock: "1em", borderRadius: "8px", fontSize: "14px" }}
        >
          The user account created here will be the primary admin of your
          charity’s donee account. You will be able to create other users after
          setting up your donee account.
        </Alert>
        <Typography variant="big" component={"p"} fontWeight="500">
          Email Address
        </Typography>
        <TextField
          id="email"
          size="small"
          fullWidth
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
            endAdornment: (
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
        <Typography variant="big" component={"p"} fontWeight="500">
          Password
        </Typography>
        <Typography variant="small" component={"span"}>
          Must be a minimum of 8 characters and include a mix of numbers,
          letters and symbols.
        </Typography>
        <TextField
          id="outlined-start-adornment"
          placeholder="Password"
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
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          size="small"
          onChange={handleChange("password")}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-start-adornment"
          placeholder="Repeat Password"
          sx={{
            border: "none",
            borderColor: "",
            fontSize: "14px",
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
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          size="small"
          onChange={handleChange("password")}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormGroup sx={{ fontSize: "14px" }}>
          <FormControlLabel
            sx={{
              fontSize: "14px",
              color: "grey.light",
              py: "2em",
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
              },
              "& svg": {
                fontSize: "1.2rem",
              },
            }}
            control={<Checkbox onChange={handleChecked} checked={checked} />}
            label={<Text/>}
          />
        </FormGroup>
        <Button
          fullWidth
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
      </Box>
    </Box>
  );
};

export default index;
