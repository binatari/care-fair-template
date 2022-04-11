import { Box } from '@mui/material'
import React from 'react'

const LinedBox = ({children}) => {
  return (
    <Box sx={{ borderLeftColor: "grey.border40", borderColor: "grey.border40", borderLeft:'1px solid #E4E7EB', pl:"1.5em", mb:"2em"}}>
        {children}
    </Box>
  )
}

export default LinedBox