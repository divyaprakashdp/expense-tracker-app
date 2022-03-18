import React, {useState} from "react";

export const AddTransaction = () => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState(0);

    const expenseNameHandler = (event) =>{
        setExpenseName(event.target.value);
    }

    const amountHandler = (event) =>{
        setAmount(event.target.value);
    }
  return (
    <>
      <h3>Add New Transaction...</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={expenseName} onChange={expenseNameHandler} type="text" placeholder="Enter text..." />
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
