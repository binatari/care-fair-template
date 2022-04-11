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
import Label from "../../Label";
import CustomInput from "../../../CustomInput";
import Upload from "../../../Upload";
import { useAuthProvider } from "../../../../context/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import HelperText from "../../../HelperText";

const schema = yup.object({
  first_name: yup.string().email().required(),
  last_name: yup.string()
  .required('Password is mandatory')
  .min(3, 'Password must be at least 3 char long'),
  date_of_birth: yup.string().required('Confirm Password is required'),
  email: yup.boolean().required().oneOf([true], 'Field must be checked')
}).required();


const initial = {
      passwordText1: "",
      passwordText2: "",
      email: "",
      checkbox: false
}

const RepresentativeStep = () => {
  const [country, setCountry] = React.useState("United Kingdom");
  const [region, setRegion] = React.useState("");
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const { control, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: initial,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });


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
    <form>
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
      <CustomInput id={"first-name"} setState={setValue} control={control}/>
      <CustomInput id={"second-name"} setState={setValue} control={control}/>
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Date of birth
      </Typography>
      <CustomInput id={"email"} setState={setValue} control={control}/>
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Email address
      </Typography>
      <CustomInput id={"title"} setState={setValue} control={control} />
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
      <CustomInput id={"date-of-birth"} setState={setValue} control={control} />
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
      <CustomInput id={"address1"} setState={setValue} control={control} />
      <CustomInput id={"address2"} setState={setValue} control={control}/>
      <Grid container spacing={2} mb={"2em"}>
        <Grid item xs={12} md={6}>
          <CustomInput id={"postal code"} setState={setValue} control={control}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInput id={"address1"} setState={setValue} control={control} />
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
        <CustomInput id={"number"} setState={setValue} control={control}/>
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
        <CustomInput id={"website"} setState={setValue} control={control} />
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
    </form>
  );
};

export default RepresentativeStep;
