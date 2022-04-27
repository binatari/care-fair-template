import { Button } from '@mui/material';
import React from 'react'
import FullLayout from "../../components/layouts/FullLayout";
const donationTypes = () => {
  return (
    <>
    <div>donation-types</div>
    <Button variant='fill'>
      gimme
    </Button>
    </>
  )
}
donationTypes.PageLayout = FullLayout
export default donationTypes