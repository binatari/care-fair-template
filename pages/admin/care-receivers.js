import React from 'react'
import FullLayout from "../../components/layouts/FullLayout";
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableBasic from '../../components/Table';
const donations = () => {
  return (
    <>
    <Grid container spacing={6}>
    <Grid item xs={12}>
        <Card>
          <CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
    </Grid>
    </>
  )
}
donations.PageLayout = FullLayout
export default donations