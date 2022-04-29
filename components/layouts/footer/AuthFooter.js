import { Link, Typography, Box } from '@mui/material'
import React from 'react'

const AuthFooter = () => {
  return (
    <Box sx={{display:'flex', pb:'2em', mt:"5em", justifyContent:'center'}}>
        <Typography variant='small'>
        ©2022 . All rights reserved. ratemycaretaker
        <Link sx={{ml:'1em'}}>Privacy Policy</Link>
      <Link sx={{ml:'1em'}}>Terms of service</Link>
      </Typography>
    </Box>
  )
}

export default AuthFooter