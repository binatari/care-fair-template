import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function AlertVerificationDialog({ value }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        fullWidth
        onClick={handleClickOpen}
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
      >
        Verify email address
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
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            color: "grey.dark",
            marginBottom:'1em',
            justifyContent: "space-between",
            display: "flex",
            "& svg": {
              padding: "0",
            },
          }}
        >
          <Typography variant="big" component={'h4'} fontWeight={500} lineHeight={"24px"}>
            Verification code sent
          </Typography>
          <IconButton
            aria-label="close"
            size="large"
            sx={{ fontSize: "1.4rem" }}
            onClick={handleClose}
          >
            <ClearRoundedIcon fontSize="inherit" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            color={"grey.main"}
            sx={{ fontSize: "14px" }}
          >
            A new verification message has been sent to your email address.
            <br /> <br />
            Please allow up to 5 minutes for delivery and check the Junk / Spam
            folder of your email inbox.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ fontWeight: "600", textTransform:'none'}} onClick={handleClose} autoFocus>
            Negative
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
