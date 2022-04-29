import { Box } from '@mui/system'
import React from 'react'
import AuthFooter from './footer/AuthFooter'
import AuthNav from './Nav/AuthNav'

const AuthLayout = ({children}) => {
  return (
    <Box
    minHeight="100vh"
    sx={{
      background:
        "linear-gradient(186.82deg, rgba(219, 229, 255, 0.6) -19.71%, rgba(213, 251, 232, 0.48) 102.01%), #FFFFFF;",
        position:'relative'
    }}
  >
      <AuthNav/>
      <Box width={"90%"} mx={'auto'} sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      {children}
      </Box>
      <AuthFooter/>
    </Box>
  )
}

export default AuthLayout