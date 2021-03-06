import React, { useContext } from "react";
import { RowContext } from "../contexts/RowContext";
import BasicTable from "./RowDetails";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const RowTable = () => {
  const { rows } = useContext(RowContext);
  const arr = rows;
  const seen = new Set();
  const sz = rows.length;
  const filteredArr = arr.filter((el) => {
    const duplicate = seen.has(el.email);
    seen.add(el.email);
    return !duplicate;
  });
  console.log("len=", rows.length);
  console.log("rows :>> ", filteredArr.length);
  return filteredArr.length ? (
    <div className="Containar">
      <ul>
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        {filteredArr.map((row) => {
          return <BasicTable row={row} key={row.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No row</div>
  );
};

export default RowTable;
