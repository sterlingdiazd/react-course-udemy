import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const [addExpenseFormVisibility, setAddExpenseFormVisibility] =
    useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => setEnteredDate(event.target.value);
  // setUserInput({ ...userInput, enteredDate: event.target.value });

  const toggleFormVisibility = (event) => {
    //console.log("Event" + JSON.stringify(event));
    setAddExpenseFormVisibility((prevState) => {
      console.log("prevState: " + prevState);
      console.log("!prevState: " + !prevState);
      return !prevState;
    });
  };

  let formAddExpense = (
    <div className="new-expense__controls">
      <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <label>Amount</label>
        <input
          type="number"
          min="1"
          step="1"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-21"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
  );

  let buttonCancel = (
    <button className="new-expense__actions" onClick={toggleFormVisibility}>
      Cancel
    </button>
  );

  let addExpenseButtonTitle = "Add New Expense";

  return (
    <form onSubmit={submitHandler}>
      {addExpenseFormVisibility === true && formAddExpense}
      <div>
        {addExpenseFormVisibility === true && buttonCancel}
        <button
          className="new-expense__actions"
          type="submit"
          onClick={toggleFormVisibility}
        >
          {addExpenseFormVisibility ? "Add Expense" : addExpenseButtonTitle}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
