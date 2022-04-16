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
import NextButton from "../../NextButton";
import { useLoginProvider } from "../../../../context/LoginProvider";

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required('Password is mandatory'),
  address_line_1: yup.string().required("please input something"),
  address_line_2: yup.string().required("please input something"),
  city: yup.string().required("please input something"),
  date_of_birth: yup.string().required('Confirm Password is required'),
  job_title: yup.string().optional('Confirm Password is required'),
  email: yup.string().email().required("please input something"),
  website: yup.string().optional(),
  postal_code: yup.string().required("please input something"),
  phone_number: yup.string().required("please input something"),
}).required();


const initial = {
      first_name: "",
      date_of_birth:"",
      postal_code:'',
      last_name: "",
      address_line_1:'',
      address_line_2:'',
      city:"",
      job_title:'',
      email:'',
      website:"",
      phone_number:''
}

const RepresentativeStep = () => {
  const [country, setCountry] = React.useState("United Kingdom");

  const { control, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: initial,
    resolver: yupResolver(schema),
    mode: 'onChange',
  }); const { setAuthContext, region } = useAuthProvider();


  const {step, totalSteps, setLoginContext}= useLoginProvider()

  const onSubmit = (data) => {
    console.log(data)
    const user=localStorage.getItem('userType')
    setAuthContext({ ...data});
    if(totalSteps && step < totalSteps){
      setLoginContext({step:step + 1 })
      console.log(step)
  }
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <CustomInput id={"first_name"}  control={control}/>
      <CustomInput id={"last_name"} control={control}/>
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Date of birth
      </Typography>
      <CustomInput id={"email"}  control={control}/>
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="2em"
        color="grey.dark"
      >
        Email address
      </Typography>
      <CustomInput id={"job_title"} control={control} />
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
      <CustomInput id={"date_of_birth"}  control={control} />
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
      <CustomInput id={"address_line_1"}  control={control} />
      <CustomInput id={"address_line_2"} control={control}/>
      <Grid container spacing={2} mb={"2em"}>
        <Grid item xs={12} md={6}>
          <CustomInput id={"postal_code"}  control={control}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInput id={"city"}  control={control} />
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
        <CustomInput id={"phone_number"} control={control}/>
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
        <CustomInput id={"website"} control={control} />
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

        <NextButton disabled={!isValid}/>
      </Box>
    </form>
  );
};

export default RepresentativeStep;
