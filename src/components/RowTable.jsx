import React, { useContext } from "react";
import { RowContext } from "../contexts/RowContext";
// import RowDetails from "./RowDetails";
import BasicTable from './RowDetails';

const RowTable = () => {
  const { rows } = useContext(RowContext);
  return rows.length ? (
      <div>
          <ul>
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
