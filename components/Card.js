import { Box, Typography } from '@mui/material'
import React from 'react'

const Card = ({Header=false, body=false}) => {
  return (
    <Box bgcolor={'white'} mx='1.5em' borderRadius={'0.5em'} pt='1em' pb='1.5em'>
        <Typography fontSize={'10px'} lineHeight='16px' color={'success.dark'} mb='1em' textAlign='center'>
            {Header}
        </Typography>
        <Typography fontSize={'32px'} lineHeight='40px' textAlign='center'>
        {body}
        </Typography>
    </Box>
  )
}

export default Card