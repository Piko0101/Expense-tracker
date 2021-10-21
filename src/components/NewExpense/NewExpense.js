import React from "react";
import { useState } from "react/cjs/react.development";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setForm(false)
  };

  const startEditingHandler = () => {
    setForm(true);
  };
  const stopEditingHandler = () => {
    setForm(false);
  };
  return (
    <div className="new-expense">
      {!form ? (
        <div className="new-expense__actions-add">
          <button type="submit" onClick={startEditingHandler}>
            Add New Expense
          </button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
