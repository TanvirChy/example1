import React, { useContext } from "react";
import { RowContext } from "../contexts/RowContext";

// const RowDetails = ({ row }) => {
//   const { dispatch } = useContext(RowContext);
//   return (
//     <ul onClick={() => dispatch({ type: "REMOVE_ROW", id: row.id })}>
//       <div> {row.name}</div>
//       <div> {row.email} </div>
//     </ul>
//   );
// };

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const BasicTable=({row})=> {
    
  const classes = useStyles();
  const { dispatch } = useContext(RowContext);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                  <button className='btn danger'
                  onClick={() => dispatch({ type: "REMOVE_ROW", id: row.id })}>Delete</button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
// export default RowDetails;
