import { Box, Typography } from '@mui/material'
import React from 'react'

const Card = ({Header=false, body=false, component=false}) => {
  return (
    <Box bgcolor={'white'} borderRadius={'0.5em'} pt='1em' pb='1.5em' px='4em' border={'1px solid #DFE0EB'} height='100%' display={'flex'} flexDirection='column' justifyContent={'center'}>
      
      {
        component? component : (
          <>
        <Typography fontSize={'16px'} lineHeight='20px' color={'grey.dark'} mb='1em'>
        {Header}
    </Typography>
    <Typography fontSize={'26px'} lineHeight='33px' fontWeight={700}>
    {body}
    </Typography>
    </>
    )
      }
   
    </Box>
  )
}

export default Card