import React, {useState, useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const expenseNameHandler = (event) =>{
      setText(event.target.value);
    }

    const amountHandler = (event) =>{
        setAmount(event.target.value);
    }

    const { addTransaction} = useContext(GlobalContext);

    const addTransactionHandler = event =>{
      event.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
    }
  return (
    <>
      <h3>Add New Transaction...</h3>
      <form onSubmit={addTransactionHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={expenseNameHandler} type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={amountHandler} type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
