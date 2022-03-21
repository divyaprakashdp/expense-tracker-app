import React,{useContext} from "react";
import { GlobalProvider } from "../Context/GlobalState";

export const TransactionList = () => {
  const context = useContext(GlobalProvider)
  console.log(context)
  
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="plus">
          Salary <span>$10000</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
