import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
export default function Index() {
  const router = useRouter()
  React.useLayoutEffect(()=>{
    // const token = localStorage.getItem('agencyToken')
      router.push('/agency/login')
  })
  return (
    <Container sx={{}}>
      
    </Container>
  );
}
