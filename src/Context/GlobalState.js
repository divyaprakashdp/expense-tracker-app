import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -23 },
    { id: 2, text: "Spa", amount: -450 },
    { id: 3, text: "Book", amount: 56 },
    { id: 4, text: "Salary", amount: 15000 },
  ],
};

//CReate context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Delete Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
