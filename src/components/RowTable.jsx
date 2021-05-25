import React, { useContext } from "react";
import { RowContext } from "../contexts/RowContext";
import BasicTable from './RowDetails';

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });
   
const RowTable = () => {
  const { rows } = useContext(RowContext);
  return rows.length ? (
      <div >
          <ul>
              
          <TableHead style={{backgroundColor:'purple'}}>
           <TableRow >
            
            <TableCell style={{padding:20}} align="right">Name</TableCell>
            <TableCell className='Center' align="right">Email</TableCell>
            <TableCell className='Right' align="right">Action</TableCell>
          </TableRow>
        </TableHead>
              { rows.map(row =>{
                  return (<BasicTable row={row} key={row.id} />);
              })}
          </ul>
      </div>
  ):(
      <div className='empty'> No row</div>
  )
}




export default RowTable;
