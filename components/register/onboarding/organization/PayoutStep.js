import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CustomInput from "../../../CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import NextButton from "../../NextButton";
import { useLoginProvider } from "../../../../context/LoginProvider";
import { useAuthProvider } from "../../../../context/AuthProvider";


const schema = yup.object({
    sort_code:yup.string().required('please input something'),
    account_number:yup.string().required('please input something'),
    verify_account_number:yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('account_number')], 'should match with account number'),
  }).required();

const Text = (props) => {
  return (
    <>
      <Typography variant="small" component={"p"}>
        By submitting a bank account, I authorise Stripe to transfer to and from
        this bank account through the Bankers’ Automated Clearing Services
        (BACS), protected by the BACS direct debit guarantee, and confirm that I
        have read and agree to the <Link> Services Agreement </Link>, including the BACS Direct
        Debit instructions.
      </Typography>
    </>
  );
};

const PayoutStep = () => {
  const [country, setCountry] = React.useState("United Kingdom");
  const [currency, setCurrency] = React.useState("GBP-British Pound");
  const [value, setValue] = React.useState(false);
  const { setAuthContext, region } = useAuthProvider();
  const { control, handleSubmit, formState: { errors, isValid }, watch} = useForm({
    defaultValues: {
        sort_code:"",
        account_number:'',
        verify_account_number:''
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleCheck = (event) => {
    setValue(event.target.checked);
  };

  const {step, totalSteps, setLoginContext}= useLoginProvider()

  const onSubmit = ({sort_code, account_number}) =>{
    setAuthContext({sort_code, account_number})
    setLoginContext({step:step + 1 })
  }
  return (
    <>
      <Typography variant="big" component={"p"}>
        Please provide details of the bank account where you will like to
        receive payouts for donations.
      </Typography>
      <Typography
        variant="big"
        component={"p"}
        fontWeight={500}
        marginTop="1.5em"
      >
        Currency
      </Typography>
      
      <TextField
        select
        value={currency}
        disabled
        margin="none"
        size="small"
        fullWidth
        sx={{
          border: "none",
          borderColor: "",
          fontSize: "14px",
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& fieldset": {
              borderColor: "grey.border40",
            },
          },
          "&.MuiFormControl-root": {
            margin: 0,
            marginTop: "0.5em",
            marginBottom: "2em",
          },
        }}
      >
        <MenuItem value={currency}>{currency}</MenuItem>
      </TextField>

      <Box sx={{ marginBottom: "2em" }}>
        <Typography variant="big" component={"p"} fontWeight={500}>
          Country of bank account
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          value={country}
          disabled
          margin="none"
          size="small"
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
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ marginBottom: "2em" }}>
        <Typography variant="big" component={"p"} fontWeight={500}>
          Sort code
        </Typography>
        <CustomInput id={"sort_code"} control={control} error={errors.sort_code}/>
      </Box>

      <Box sx={{ marginBottom: "2em" }}>
        <Typography variant="big" component={"p"} fontWeight={500}>
          Account number
        </Typography>
        <CustomInput id={"account_number"} control={control} error={errors.account_number} />
      </Box>

      <Box>
        <Typography variant="big" component={"p"} fontWeight={500}>
          Confirm account number
        </Typography>
        <CustomInput id={"verify_account_number"} control={control} error={errors.verify_account_number} />
        <FormGroup sx={{ fontSize: "14px" }}>
          <FormControlLabel
            sx={{
              fontSize: "14px",
              color: "grey.light",
              py: "2em",
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                alignItems:'flex-start'
              },
              "&.MuiFormControlLabel-root":{
                alignItems:'flex-start',
              },
              "& svg": {
                fontSize: "1.2rem",
              },
            }}
            control={<Checkbox checked={value} onChange={handleCheck} />}
            label={<Text />}
          />
        </FormGroup>
        <NextButton  disabled={!isValid || !value}/>
      </Box>
      </form>
    </>
  );
};

export default PayoutStep;
