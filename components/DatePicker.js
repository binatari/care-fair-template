import React, { useEffect } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import moment from "moment";


const DateSetter = ({ dateValue, setDateValue, index }) => {
  // const [open, setOpen] = React.useState(false)

  const date = moment();

  useEffect(() => {
    if (
      (dateValue[1] !== undefined && dateValue[0] !== undefined) &&( moment(dateValue[1]).valueOf() < moment(dateValue[0]).valueOf())
    ) {
        let arrCopy = [...dateValue]
        arrCopy[0] = arrCopy[1]
      setDateValue(arrCopy);
    }
  }, [dateValue]);

  //log the time in milliseconds and check if the values
  //on the table are between them
  // const min = Date.parse('2019-10-01')
  // console.log(Date.parse(value).getDay())
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        //  open={open}
        maxDate={index === 0 && dateValue[1] ? dateValue[1] : date}
        value={dateValue[index]}
        onChange={(newValue) => {
            let arrCopy = [...dateValue]
            arrCopy[index] = newValue
          setDateValue(arrCopy);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="DD/MM/YYY"
            sx={{
              fontSize: "14px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  textTransform: "uppercase",
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
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateSetter;
