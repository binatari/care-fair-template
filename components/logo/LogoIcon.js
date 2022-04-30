import React from "react";
import { Link, Typography } from "@mui/material";
import Image from "next/image";
import IdonatioLogo from '../../public/app_logo.png'


const LogoIcon = () => {
  return (
    <Link href="/" sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', my:'1em', px:"1em", textDecoration:'none'}} >
      <img src={IdonatioLogo.src} alt={'Company logo'} style={{width:'15%'}}  />
      <Typography variant="h6" sx={{color:"primary.blue"}}>ratemycaretaker</Typography>
    </Link>
  );
};

export default LogoIcon;
