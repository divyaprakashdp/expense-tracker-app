import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = (props)=>{
    const sign = props.transaction.amount<0 ? '-' : '+';

    const { deleteTransaction} = useContext(GlobalContext);

    const deleteHandler = () =>{
      deleteTransaction(props.transaction.id)
    }
    return(
        <li className={props.transaction.amount<0 ? 'minus' : 'plus'}>
        {props.transaction.text} <span>{sign}${Math.abs(props.transaction.amount)}</span>
          <button onClick={deleteHandler} className="delete-btn">x</button>
        </li>
    )
}