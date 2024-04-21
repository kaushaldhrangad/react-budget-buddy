import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpense > budget ? alert("Budget is Over") : "";
    

  return (
    <div  className="flex bg-green-600 cursor-pointer text-white font-semibold  px-6 py-2 rounded-md mx-5">
      Remaining: ₹{budget - totalExpense}
      
    </div>
  );
};

export default Remaining;
