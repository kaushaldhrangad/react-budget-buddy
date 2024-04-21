import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <>
      <div className="bg-gray-600 text-white font-semibold cursor-pointer px-6 py-2 rounded-md mx-5">
        Budget: ₹{budget}
      </div>
    </>
  );
};

export default Budget;
