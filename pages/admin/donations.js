import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import ProductPerfomance from "../../components/dashboard/ProductPerfomance";
import FullLayout from "../../components/layouts/FullLayout";
import TableFilter from '../../components/dashboard/TableFilter'
import Card from "../../components/Card";



export default function Donations() {
  
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor:'id'
      },
      {
        Header: "DONOR",
        accessor:'lastName'
      },
      {
        Header: "DATE & TIME",
        accessor:'firstName'
      },
      {
        Header: "TYPE",
        accessor:'age',
        filter:(rows, columnId, filterValue)=>{
          return rows.filter((row)=>{
            console.log(filterValue)
            if(row.original.height)return row
          })
        }
      },
      {
        Header: "GIFT AID",
        accessor:'height'
      },
      {
        Header: "CHANNEL",
        accessor:'weight'
      },
      {
        Header: "AMOUNT",
        accessor:'size'
      },
    ],
    []
  );

  const rows = useMemo (()=>[
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, height: 1200, weight:30, size:10 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, height: 50, weight:30, size:10 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, height:5000, weight:30, size:10 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, height: 2000, weight:30, size:10 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, height: 2500, weight:30, size:10 },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, height: 50, weight:30, size:10 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, height: 50, weight:30, size:10 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, height: 50, weight:30, size:10 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, height: 50, weight:30, size:10 },
  ], []);

  const cards = [
    {
      header:'TOTAL DONATION AMOUNT',
      currency:'$',
      body:'97,020'
    },
    {
      header:'NO. OF DONATIONS',
      body:'245'
    },
    {
      header:'AVG. DONATION AMOUNT',
      currency:'$',
      body:'369'
    },
    {
      header:'UNIQUE DONORS',
      body:'136'
    }
  ]

  return (
    <>
     <Box display='flex' justifyContent={'space-between'} alignItems='center' mb='2em' >
            <Typography variant='h4' component={'h2'} >
                Donations
            </Typography>
            <Button
            sx={{
              borderRadius: "8px",
              paddingY: "8px",
              paddingX: "12px",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "none",
              "&.Mui-disabled": {
                opacity: "0.3",
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
            variant="contained"
            color="primary"
            disableElevation
            disableFocusRipple
            disableRipple
          >
            Add donation type
          </Button>
        </Box>
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>

      </Grid>
      {
        cards.map(({header, body, currency}, index)=>(
          <Grid item xs={12} md={3} lg={3}>
          <Card Header={header} body={body} currency={currency}/>
          </Grid>
        ))
      }
     
      <Grid item xs={12} lg={11} mt='2.5em'>
        <ProductPerfomance columns={columns} data={rows} header={TableFilter}/>
        
      </Grid>
    </Grid>
    </>
  );
}

Donations.PageLayout = FullLayout
