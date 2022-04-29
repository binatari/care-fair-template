// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Avatar, Box, ListItemAvatar, ListItemText } from "@mui/material";

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9)
// ]

const TableBasic = ({ setValue, columns, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns?.map((column) => (
              <TableCell align="right">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              onClick={()=>setValue(row.id)}
              sx={{
                "&:last-of-type td, &:last-of-type th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row" >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°`} src={row.profile_photo_url} />
                </ListItemAvatar>
                <ListItemText primary={row.name} />
              </Box>
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.zip_code}</TableCell>
              <TableCell align="right">{row.date_joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBasic;
