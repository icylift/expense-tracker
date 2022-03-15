import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'



//Initial state 
const initialState = {
  transactions: [
    { id: 1, text: "flowers", amount: -20 },
    {id: 2, text: "paycheck", amount: 3000 },
    {id: 3, text: "protein", amount: -76 },
    {id: 4, text: "photo-shoot", amount: 150 }
  ]
}


//Create Context
export const GlobalContext = createContext(initialState);


//provider component 
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  //Action
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}