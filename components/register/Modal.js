import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/router";

export default function AlertDialog({ value }) {
 const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRoute = () => {
    router.push('/register/organization')
  };


  return (
    <div>
      <Button
        onClick={handleClickOpen}
        fullWidth
        sx={{
          borderRadius: "8px",
          paddingY: "8px",
          paddingX: "12px",
          fontSize: "14px",
          fontWeight: "600",
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
        disabled={value === ""}
      >
        Continue
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            px: "1.2em",
            py: "1em",
            borderRadius: "8px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontSize: "18px", fontWeight: 500, color: "grey.dark" }}
        >
          {"Confirm legal authorization"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color={"grey.main"}  sx={{ fontSize: "14px", }}>
            The user account created during this setup process will be the
            primary admin of your charity’s donee account on the iDonatio
            platform. This account must be created by and for someone who has
            significant responsibility for the control and management of the
            charity (i.e. the legal representative).
            <br /> <br />
            To proceed, please confirm that you are a legal representative of
            the charity you wish to register. If this does not describe your
            role at the charity, please ask the right person to complete this
            setup process.
          </DialogContentText>
          <FormGroup sx={{ fontSize: "14px", }}>
            <FormControlLabel
              sx={{
                fontSize: "14px",
                color: "grey.light",
                py: "2em",
                '& .MuiFormControlLabel-label':{
                    fontSize: "14px",
                },
                '& svg':{
                    fontSize: "1.2rem",
                }
              }}
              control={<Checkbox onChange={handleChange} checked={checked}/>}
              label="I confirm that I am a legal representative of the charity I wish to register and have authority to setup and manage a donee account on behalf of the charity."
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              borderRadius: "8px",
              paddingY: "8px",
              paddingX: "12px",
              fontSize: "14px",
              fontWeight: "600",
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
            disabled={!checked}
            onClick={handleRoute}
          >
            Continue
          </Button>
          <Button sx={{fontWeight: "600",}} onClick={handleClose} autoFocus>
            Negative
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
