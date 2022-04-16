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
import React, { useState } from "react";
import OtherRadio from "../../../OtherRadio";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Label from "../../Label";
import CustomInput from "../../../CustomInput";
import Upload from "../../../Upload";
import { useAuthProvider } from "../../../../context/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import { onLogin } from "../../../../src/utils/queries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LinedBox from "../../../LinedBox";
import NextButton from "../../NextButton";
import { useLoginProvider } from "../../../../context/LoginProvider";

const schema = yup
  .object({
    name: yup.string().required("please input something"),
    state: yup.string().required("please input something"),
    is_subsidiary: yup.string().required("please input something"),
    city: yup.string().required("please input something"),
    subsidiary_number: yup.string().optional(),
    registration_number: yup.string().required("please input something"),
    description_of_service: yup.string().optional(),
    address_line_1: yup.string().required("please input something"),
    phone_number: yup.string().required("please input something"),
    address_line_2: yup.string().required("please input something"),
    website: yup.string().optional(),
    postal_code: yup.string().required("please input something"),
    // country_id:yup.string().required('please input something'),
    hmrc_reference_number: yup.string().optional(),
    email: yup.string().email().required("please input something"),
  })
  .required();

const CharityStep = () => {
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { setAuthContext, region } = useAuthProvider();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      state: "",
      name: "",
      city: "",
      is_subsidiary: null,
      subsidiary_number: "",
      description_of_service: "",
      registration_number: "",
      address_line_1: "",
      phone_number: "",
      address_line_2: "",
      website: "",
      postal_code: "",
      country_id: "",
      hmrc_reference_number: "",
      email: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const watchingState = watch("state");
  const is_subsidiary = watch("is_subsidiary");

  const {step, totalSteps, setLoginContext}= useLoginProvider()

  const onSubmit = (data) => {
    let sendData;
    if (data.is_subsidiary === "yes") {
      sendData = { ...data, is_subsidiary: true };
    } else {
      sendData = { ...data, is_subsidiary: false };
    }
    setAuthContext({organization:sendData });
    if(totalSteps && step < totalSteps){
      setLoginContext({step:step + 1 })
      console.log(step)
  }
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="big" component={"p"} fontWeight={500}>
          Location
        </Typography>
        <Typography variant="small" component={"p"}>
          Where is your charity registered?
        </Typography>
        <TextField
          select
          value={"United Kingdom"}
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
          <MenuItem value={"United Kingdom"}>{"United Kingdom"}</MenuItem>
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
          <Controller
            name="state"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                variant="outlined"
                onChange={onChange}
                size="small"
                value={value}
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
            )}
          />
        </FormControl>

        {watchingState && (
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
            <CustomInput
              id={"name"}
              setState={setValue}
              control={control}
              error={errors.name}
            />
            <Typography
              variant="big"
              component={"p"}
              fontWeight={500}
              marginTop="9px"
              color="grey.dark"
            >
              Charity registration number
            </Typography>
            <CustomInput
              id={"registration_number"}
              setState={setValue}
              control={control}
              error={errors.registration_number}
            />
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
              <Controller
                name="is_subsidiary"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup
                    onChange={onChange}
                    value={value}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value={"yes"}
                      control={<OtherRadio />}
                      label={<Label head={"Yes"} />}
                    />
                    <FormControlLabel
                      value={"no"}
                      control={<OtherRadio />}
                      label={<Label head={"No"} />}
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            <LinedBox>
              {watchingState !== "Scotland" && is_subsidiary === "yes" ? (
                <>
                  <Typography
                    variant="big"
                    component={"p"}
                    fontWeight={500}
                    marginTop="9px"
                    color="grey.dark"
                  >
                    Subsidiary number
                  </Typography>
                  <CustomInput
                    id={"subsidiary_number"}
                    setState={setValue}
                    control={control}
                    error={errors.subsidiary_number}
                  />
                </>
              ) : watchingState === "Scotland" && is_subsidiary === "yes" ? (
                <>
                  <Typography
                    variant="big"
                    component={"p"}
                    fontWeight={500}
                    marginTop="9px"
                    color="grey.dark"
                  >
                    Parent charity name
                  </Typography>
                  <CustomInput
                    id={"parent_charity_name"}
                    setState={setValue}
                    control={control}
                  />
                  <Typography
                    variant="big"
                    component={"p"}
                    fontWeight={500}
                    marginTop="9px"
                    color="grey.dark"
                  >
                    Parent charity number
                  </Typography>
                  <CustomInput
                    id={"parent_charity_number"}
                    setState={setValue}
                    control={control}
                  />
                  <Typography
                    variant="big"
                    component={"p"}
                    fontWeight={500}
                    marginTop="9px"
                    color="grey.dark"
                  >
                    Parent charity country of registration
                  </Typography>
                  <CustomInput
                    id={"parent_charity_country"}
                    setState={setValue}
                    control={control}
                  />
                </>
              ) : null}
            </LinedBox>
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
              If your charity is a subsidiary charity, this must be the
              registered address of your parent organisation.
            </Typography>
            <CustomInput
              id={"address_line_1"}
              setState={setValue}
              control={control}
              error={errors.address_line_1}
            />
            <CustomInput
              id={"address_line_2"}
              setState={setValue}
              control={control}
              error={errors.address_line_2}
            />
            <Grid container spacing={2} mb={"2em"}>
              <Grid item xs={12} md={6}>
                <CustomInput
                  id={"city"}
                  setState={setValue}
                  control={control}
                  error={errors.city}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  id={"postal_code"}
                  setState={setValue}
                  control={control}
                  error={errors.postal_code}
                />
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
              Your charity’s HMRC reference number is required only if you wish
              to enable GiftAid features on your account.
            </Typography>
            <CustomInput
              id={"hmrc_reference_number"}
              setState={setValue}
              control={control}
              error={errors.hmrc_reference_number}
            />
            <Box mt="2em">
              <Typography
                variant="big"
                component={"p"}
                fontWeight={500}
                color="grey.dark"
              >
                Business phone number
              </Typography>
              <CustomInput
                id={"phone_number"}
                setState={setValue}
                control={control}
                error={errors.phone_number}
              />
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
              <CustomInput
                id={"email"}
                setState={setValue}
                control={control}
                error={errors.email}
              />
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
              <CustomInput
                id={"website"}
                setState={setValue}
                control={control}
                error={errors.website}
              />
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
              <Controller
                name="description_of_service"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextareaAutosize
                    aria-label="description"
                    onChange={onChange}
                    minRows={4}
                    value={value}
                    placeholder="Description"
                    style={{ width: "100%", border: "1px solid #E4E7EB" }}
                  />
                )}
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
              {/* <Upload control={control}/> */}
              <Button></Button>
            </Box>
            <NextButton disabled={!isValid}/>
          </>
        )}
      </form>
    </>
  );
};

export default CharityStep;
