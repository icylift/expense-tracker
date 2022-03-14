import React, { useContext } from "react";
import { useContext } from "react/cjs/react.production.min";
import { GlobalContext } from '../context./GlobalContext';


function Balance()  {
const { transactions } = useContext(GlobalContext);

const amount = transactions.map(transaction => transaction.amount);
const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return(
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}





export default Balance