import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Total = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div
      className="bg-red-600 text-white
  cursor-pointer px-6 py-2 rounded-md mx-5 font-bold">
      Spend: {totalExpense}
    </div>
  );
};

export default Total;
