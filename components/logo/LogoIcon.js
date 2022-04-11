import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import IdonatioLogo from '../../public/logo.png'


const LogoIcon = () => {
  return (
    <Link href="/" >
      <img src={IdonatioLogo.src} alt={'Company logo'} style={{height:'3em'}}  />
    </Link>
  );
};

export default LogoIcon;
