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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function CustomModal({
  modalDescription,
  component,
  buttonsArr=[],
  closeIcon,
  text,
  startIcon,
  endIcon,
  disabled
}) {
  const [isShown, setIsShown] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };


  console.log(disabled)

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        startIcon={startIcon && startIcon}
        endIcon={endIcon && endIcon}
        disabled={disabled}
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
        {text}
      </Button>
      <Dialog
        open={isShown}
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
            marginBottom: "1em",
            justifyContent: "space-between",
            display: "flex",
            "& svg": {
              padding: "0",
            },
          }}
        >
          <Typography
            variant="h4"
            component={"h4"}
            fontWeight={500}
            lineHeight={"24px"}
            display="flex"
            justifyContent={"center"}
          >
            {modalDescription && modalDescription}
          </Typography>
          {closeIcon && (
            <IconButton
              aria-label="close"
              size="large"
              sx={{ fontSize: "1.4rem" }}
              onClick={handleClose}
            >
              <ClearRoundedIcon fontSize="inherit" />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent>{component && component}</DialogContent>
        <DialogActions>
          {buttonsArr?.map(({ style, text, onClick, variant, color }) => (
            <Button
              variant={variant ? variant : ""}
            //   sx={style}
            //   color={color? color : "" }
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
              onClick={onClick ? ()=>{
                onClick()
                handleClose()
              } : handleClose}
              autoFocus
              disableElevation
              disableFocusRipple
              disableRipple
            >
              {text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
}
