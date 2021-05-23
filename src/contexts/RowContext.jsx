import React, { createContext, useReducer } from "react";
import { rowReducer } from "../reducers/rowReducer";

export const RowContext = createContext();

const RowContextProvider = (props) => {
  const [rows, dispatch] = useReducer(rowReducer,[]);

  return (
    <RowContext.Provider value={{ rows, dispatch}}>
      {props.children}
    </RowContext.Provider>
  );
};

export default RowContextProvider;
