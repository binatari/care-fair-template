import { Box } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
    <Box bgcolor={'primary.main'}>
        {children}
    </Box>
  )
}

export default Layout