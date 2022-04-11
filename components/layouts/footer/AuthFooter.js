import { Link, Typography, Box } from '@mui/material'
import React from 'react'

const AuthFooter = () => {
  return (
    <Box sx={{display:'flex', pb:'2em', mt:"5em", justifyContent:'center'}}>
        <Typography variant='small'>
        ©2022 iDonatio UK LTD. All rights reserved.
        <Link sx={{ml:'1em'}}>Privacy Policy</Link>
      <Link sx={{ml:'1em'}}>Privacy Policy</Link>
      </Typography>
    </Box>
  )
}

export default AuthFooter