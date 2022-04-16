import React from 'react'
import {useRouter} from 'next/router'
import { Typography } from '@mui/material'
const RouteName = () => {
const router = useRouter()
const route = router.pathname
  return (
     <Typography variant='h2' component={'h2'}>{route}</Typography>
  )
}

export default RouteName