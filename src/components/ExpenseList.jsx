import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-11">Expense List</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
