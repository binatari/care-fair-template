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

const CharityStep = () => {
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
    <>
      <Typography variant="big" component={"p"}>
        Please provide details of your charity organisation.
      </Typography>
      <Alert
        severity="error"
        color={"grey"}
        sx={{
          marginTop: "1em",
          borderRadius: "8px",
          fontSize: "14px",
          mb: "1.5em",
        }}
      >
        The details you provide below must match the information filed with the
        relevant regulatory body for your organisation.
        <br />
        <Link mt="0.5em">Learn more</Link>
      </Alert>
      <Typography variant="big" component={"p"} fontWeight={500}>
        Location
      </Typography>
      <Typography variant="small" component={"p"}>
        Where is your charity registered?
      </Typography>
      <TextField
        id="outlined-select-currency"
        select
        value={country}
        disabled
        margin="none"
        size="small"
        onChange={handleChange}
        fullWidth
        sx={{
          border: "none",
          borderColor: "",
          fontSize: "14px",
          marginBottom: "1.5em",
          marginTop: "2em",
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& fieldset": {
              borderColor: "grey.border40",
            },
          },
          "&.MuiFormControl-root": {
            margin: 0,
            marginTop: "0.5em",
          },
        }}
      >
        <MenuItem value={country}>{country}</MenuItem>
      </TextField>
      <Typography variant="small" component={"p"} mb="0.75em">
        iDonatio is currently only available in the United Kingdom. We are
        working to bring the service to more countries as soon as possible.
        Learn more
      </Typography>
      <FormControl
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
              fontSize: "14px",
            },
            "&:hover fieldset": {
              borderColor: "grey.border40",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
              boxShadow: "0px 0px 0px 2px #D6E1FF",
              // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
          },
          "&.MuiFormControl-root": {
            margin: 0,
            marginTop: "0.5em",
          },
        }}
      >
        <Select
          variant="outlined"
          onChange={handleRegionChange}
          size="small"
          value={region}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <Typography variant="big" component={"p"}>
                  Select a region...
                </Typography>
              );
            }
            return selected;
          }}
          displayEmpty
          fullWidth
          sx={{}}
        >
          <MenuItem value={"England and Wales"} sx={{ fontSize: "14px" }}>
            England and Wales
          </MenuItem>
          <MenuItem value={"Northern Ireland"} sx={{ fontSize: "14px" }}>
            Northern Ireland
          </MenuItem>
          <MenuItem value={"Scotland"} sx={{ fontSize: "14px" }}>
            Scotland
          </MenuItem>
        </Select>
      </FormControl>
      {region && (
        <>
          <Typography
            variant="big"
            component={"p"}
            fontWeight={500}
            marginTop="9px"
            color="grey.dark"
          >
            Charity name
          </Typography>
          <CustomInput id={"charity"} setState={setValue} />
          <Typography
            variant="big"
            component={"p"}
            fontWeight={500}
            marginTop="9px"
            color="grey.dark"
          >
            Charity registration number
          </Typography>
          <CustomInput id={"registration-number"} setState={setValue} />
          <Typography
            variant="big"
            component={"p"}
            fontWeight={500}
            marginTop="9px"
            color="grey.dark"
          >
            Subsidiary Status
          </Typography>
          <Typography variant="small" component={"p"}>
            Is your charity registered as a subsidiary of another charity
            organisation?
          </Typography>
          <FormControl sx={{ marginBottom: "2em" }}>
            <RadioGroup
              name="radio-buttons-group"
              onChange={handleChecked}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="Yes"
                control={<OtherRadio />}
                label={<Label head={"Yes"} />}
              />
              <FormControlLabel
                value="No"
                control={<OtherRadio />}
                label={<Label head={"No"} />}
              />
            </RadioGroup>
          </FormControl>
          <Typography
            variant="big"
            component={"p"}
            fontWeight={500}
            marginTop="9px"
            color="grey.dark"
          >
            Registered address
          </Typography>
          <Typography variant="small" component={"p"}>
            If your charity is a subsidiary charity, this must be the registered
            address of your parent organisation.
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
          <Box>
            <Typography
              variant="big"
              component={"p"}
              fontWeight={500}
              color="grey.dark"
            >
              HMRC reference number
            </Typography>
          </Box>
          <Typography variant="small" component={"p"}>
            Your charity’s HMRC reference number is required only if you wish to
            enable GiftAid features on your account.
          </Typography>
          <CustomInput id={"address1"} setState={setValue} />
          <Box mt="2em">
            <Typography
              variant="big"
              component={"p"}
              fontWeight={500}
              color="grey.dark"
            >
              Business phone number
            </Typography>
            <CustomInput id={"businessNumber"} setState={setValue} />
          </Box>
          <Box mt="2em">
            <Typography
              variant="big"
              component={"p"}
              fontWeight={500}
              color="grey.dark"
            >
              Business email address
            </Typography>
            <Typography variant="small" component={"p"}>
              All correspondence from iDonatio will be sent to this email
              address.
            </Typography>
            <CustomInput id={"businessEmail"} setState={setValue} />
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
            <Typography
              variant="big"
              component={"p"}
              fontWeight={500}
              color="grey.dark"
            >
              Description of services
            </Typography>
            <Typography variant="small" component={"p"}>
              As on your charity organisation
            </Typography>
            <TextareaAutosize
              aria-label="description"
              minRows={4}
              value={description}
              placeholder="Description"
              style={{ width: "100%", border: "1px solid #E4E7EB" }}
            />
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
              Upload a clear .jpg, .png or .pdf scan of your proof of entity
              document. (Maximum file size is 5MB.)
            </Typography>
            <Upload />
          </Box>
        </>
      )}
    </>
  );
};

export default CharityStep;
