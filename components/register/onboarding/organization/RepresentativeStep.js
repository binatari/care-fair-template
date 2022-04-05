import {
  Alert,
  Link,
  Typography,
  Box,
  Button,
  Select,
  FormControl,
  MenuItem,
  TextField,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import OtherRadio from "../../../OtherRadio";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Label from "../../Label";
import CustomInput from "../../../CustomInput";
import Upload from "../../../Upload";

const RepresentativeStep = () => {
  const [country, setCountry] = React.useState("United Kingdom");
  const [region, setRegion] = React.useState("");
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChecked = (event) => {
    setValue(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box
      sx={{
        paddingX: {
          xs: "2.5em",
          sm: "3.8em",
          md: "3.8em",
        },
      }}
      bgcolor={"white"}
      maxWidth={"28rem"}
      width={"90%"}
      pt="2.6em"
      pb="3.2em"
      borderRadius={"16px"}
    >
      <Typography variant="big" component={"p"}>
        Please provide your legal and contact details. You will be registered as
        the legal representative for your charity and will be primarily
        responsible for the account on this platform.
      </Typography>
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Your legal name
      </Typography>
      <CustomInput id={"first-name"} setState={setValue} />
      <CustomInput id={"second-name"} setState={setValue} />
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Date of birth
      </Typography>
      <CustomInput id={"email"} setState={setValue} />
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Email address
      </Typography>
      <CustomInput id={"title"} setState={setValue} />
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        marginBottom="0.5em"
        color="grey.dark"
      >
        job title
      </Typography>
      <CustomInput id={"date-of-birth"} setState={setValue} />
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        marginBottom="0.5em"
        color="grey.dark"
      >
        Home address
      </Typography>
      <CustomInput id={"address1"} setState={setValue} />
      <CustomInput id={"address2"} setState={setValue} />
      <Grid container spacing={2} mb={"2em"}>
        <Grid item xs={12} md={6}>
          <CustomInput id={"postal code"} setState={setValue} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInput id={"address1"} setState={setValue} />
        </Grid>
      </Grid>
      <Box mt="2em">
        <Typography
          variant="big"
          component={"p"}
          fontWeight={500}
          color="grey.dark"
        >
          Phone number
        </Typography>
        <CustomInput id={"number"} setState={setValue} />
      </Box>
      <Box mt="2em">
        <Typography
          variant="big"
          component={"p"}
          fontWeight={500}
          color="grey.dark"
        >
          Website
        </Typography>
        <CustomInput id={"website"} setState={setValue} />
      </Box>
      <Box mt="2em">
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            variant="big"
            component={"p"}
            fontWeight={500}
            color="grey.dark"
          >
            Verification document
          </Typography>
        </Box>
        <Typography variant="small" component={"p"}>
          Upload a clear .jpg, .png or .pdf scan of your proof of identity and
          address documents. You can upload these as a single scan or as
          multiple documents. (You can upload up to 4 individual files with a
          maximum file size of 5MB each.)
        </Typography>
        <Upload />
      </Box>

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
  );
};

export default RepresentativeStep;
