import { Typography } from '@mui/material'
import React from 'react'

const HelperText = ({text}) => {
  return (
    <Typography variant='small' component={'p'} color='error'>
        {text}
    </Typography>
  )
}

export default HelperText