import { Alert, Box, FormControl, FormControlLabel, Grid, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import OtherRadio from '../../../OtherRadio'
import Upload from '../../../Upload'
import Label from '../../Label'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAuthProvider } from "../../../../context/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import CustomInput from '../../../CustomInput'
import LinedBox from '../../../LinedBox'

const schema = yup.object({
  checkName:yup.string().required('please input something'),
  checkAddress:yup.string().required('please input something'),
  preferred_location:yup.string().required('please input something'),
  alt_name: yup.string().optional('please input something'),
  alt_address_line_1:yup.string().optional('please input something'),
  alt_address_line_2: yup.string().optional('please input something'),
  alt_city: yup.string().optional('please input something'),
  alt_country_id: yup.string().optional('please input something'),
  alt_postal_code: yup.string().optional('please input something')
}).required();


const PlatformStep = () => {
    const [value, setValue] = React.useState("");
    const { control, handleSubmit, formState: { errors, isValid }, watch} = useForm({
      defaultValues: {
       checkAddress:'',
       checkName:'',
       preferred_location:'',
       alt_name:'',
       alt_address_line_1:'',
       alt_address_line_2:'',
       alt_city:'',
       alt_country_id:'',
       alt_postal_code:''
      },
      resolver: yupResolver(schema),
      mode: 'onChange',
    });

    const watchAddress = watch('checkAddress')
    const watchName = watch('checkName')
  
    const handleChecked = (event) => {
        setValue(event.target.value);
      };
  return (
    <>
    <Typography variant="big" component={"p"}>
    Please provide the following additional information, used to optimise your charity and donors’ experience on the platform.
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
      You will be able to modify these details at any time in your donee account area.
      </Alert>
      <form action="">
      <Typography variant="big" component={"p"} fontWeight={500}>
      Do you operate by a different name from the one registered with your regulatory body that is more familiar to your donors?
      </Typography>
      <Typography variant="small" component={"p"}>
      We may use this name in relation to your donee account to help donors more easily identify you.
      </Typography>
      <FormControl sx={{ marginBottom: "2em" }}>
      <Controller
            name="checkName"
            control={control}
            render={({ field: { onChange, value, } }) => (
            <RadioGroup
              onChange={onChange}
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
               )}
               />
          </FormControl>
          {
        watchName === 'Yes' && (
          <LinedBox>
              <Typography
                variant="big"
                component={"p"}
                fontWeight={500}
                marginTop="9px"
                color="grey.dark"
              >
                Subsidiary number
              </Typography>
              <Typography variant="small" component={"p"}>
      We may use this address in relation to your donee account to help donors more easily identify you.
      </Typography>
              <CustomInput id={"alt_name"} setState={setValue} control={control} error={errors.subsidiary_number} />
          </LinedBox>
        )
      }

          <Typography variant="big" component={"p"} fontWeight={500}>
          Do you operate out of a different address from the one registered with your regulatory body that your donors are more familiar with?
      </Typography>
    
      
      <Typography variant="small" component={"p"}>
      We may use this address in relation to your donee account to help donors more easily identify you.
      </Typography>
          <FormControl sx={{ marginBottom: "2em" }}>
          <Controller
            name="checkAddress"
            control={control}
            render={({ field: { onChange, value, } }) => (
            <RadioGroup
            onChange={onChange}
            value={value}
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
              )}
              />
          </FormControl>
          {
        watchAddress === 'Yes' && (
          <LinedBox>
              <Typography
                variant="big"
                component={"p"}
                fontWeight={500}
                marginTop="9px"
                color="grey.dark"
              >
                Subsidiary number
              </Typography>
              <Typography variant="small" component={"p"}>
      We may use this address in relation to your donee account to help donors more easily identify you.
      </Typography>
              <CustomInput id={"alt_address"} setState={setValue} control={control} error={errors.alt_subsidiary_number} />
              <CustomInput id={"alt_address_line_1"} setState={setValue} control={control} error={errors.alt_address_line_1} />
          <CustomInput id={"alt_address_line_2"} setState={setValue} control={control} error={errors.alt_address_line_2} />
          <Grid container spacing={2} mb={"2em"}>
            <Grid item xs={12} md={6}>
              <CustomInput id={"alt_city"} setState={setValue} control={control} error={errors.alt_city}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput id={"alt_postal_code"} setState={setValue} control={control} error={errors.alt_postal_code} />
            </Grid>
          </Grid>
          </LinedBox>
        )
      }
          <Typography variant="big" component={"p"} fontWeight={500}>
          What is the primary way in which your donors interact with you?
      </Typography>
      <Typography variant="small" component={"p"}>
      We use this to prioritise the location information shown to your donors in some parts of the donation app.
      </Typography>
     
          <FormControl sx={{ marginBottom: "2em" }}>
          <Controller
            name="preferred_location"
            control={control}
            render={({ field: { onChange, value, } }) => (
            <RadioGroup
              onChange={onChange}
              value={value}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="website"
                control={<OtherRadio />}
                label={<Label head={"Digitally, via website or app"} />}
              />
              <FormControlLabel
                value="physical"
                control={<OtherRadio />}
                label={<Label head={"At a physical location"} />}
              />
            </RadioGroup>
            )}
              />
          </FormControl>
         
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
          </form>
    </>
  )
}

export default PlatformStep