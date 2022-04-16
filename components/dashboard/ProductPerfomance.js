import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useTable, useFilters, useGlobalFilter } from 'react-table'


const ProductPerfomance = ({columns, data, header=null}) => {
  const instance = useTable(
    {
      columns,
      data
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state
  } = instance;

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10);
  return (
    <>
       {header?.(instance)}
      <Table
       {...getTableProps()}
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
         overflow:'hidden',
         borderTopRightRadius:"8px",  borderTopLeftRadius:"8px",
         border:' 1px solid #EDF0F2'

        }}
        size="small"
      >
        <TableHead sx={{ borderTopRightRadius:"8px",  borderTopLeftRadius:"8px", bgcolor:'grey.border30'}} >
          {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()} sx={{borderTopRightRadius:"8px",  borderTopLeftRadius:"8px",}}>
          {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()} sx={{textAlign:'center'}}>{column.render("Header")}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()} >
          {rows.map((row) => {
            prepareRow(row)
            return (
            <TableRow {...row.getRowProps()} sx={{bgcolor:'white', }}>
          { row.cells.map((cell, idx)=>{
            return (<TableCell {...cell.getCellProps()} sx={{textAlign:'center'}}>
              {cell.render('Cell')}
            </TableCell>)
          })}
          </TableRow>
          )
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductPerfomance;
