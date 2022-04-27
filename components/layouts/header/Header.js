import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
// Dropdown Component
import SearchDD from "./SearchDD";
import ProfileDD from "./ProfileDD";
import LogoIcon from "../../logo/LogoIcon";
import {useRouter} from "next/router"
const Header = ({ sx, customClass, toggleMobileSidebar, position }) => {
  const router = useRouter()
  const pageName = router.pathname

  const pathFormat = (str) =>{
    const nameFormat = str.replace('-', ' ')
    const removePath = nameFormat.replace('/admin/', '')
    return removePath
  }
  return (
    <AppBar sx={sx} position={position} elevation={0} className={customClass}>
      <Toolbar>
        <Typography variant="h5" sx={{color:'black', fontWeight:'700'}}>
          {pathFormat(pageName)}
        </Typography>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          {/*put button here*/}
        </IconButton>
        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
      
        {/* ------------ End Menu icon ------------- */}

        <Box flexGrow={1} />
        <Box>

        <ProfileDD />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  position: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
