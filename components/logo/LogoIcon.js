import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import IdonatioLogo from '../../public/logo.svg'


const LogoIcon = () => {
  return (
    <Link href="/" sx={{display:'flex', justifyContent:'center', alignItems:'center', my:'1em'}} >
      <img src={IdonatioLogo.src} alt={'Company logo'} style={{width:'90%'}}  />
    </Link>
  );
};

export default LogoIcon;
