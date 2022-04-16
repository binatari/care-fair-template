import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LogoIcon from '../../logo/LogoIcon'
import { useRouter } from "next/router";

const AuthNav = () => {
    let curl = useRouter();
    const location = curl.pathname;
    console.log(location)
  return (
    <Box sx={{ width:'100%', paddingBlock:'4em'}}>
        <Container sx={{mx:"auto", display:"flex", justifyContent:"center", py:'0.5em' }}>
            <LogoIcon/>
            
            {/* <Button>
                
            </Button> */}
        </Container>
    </Box>
  )
}

export default AuthNav