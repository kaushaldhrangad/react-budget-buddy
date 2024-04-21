import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MdDelete } from "react-icons/md";

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext)
  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <div className="">
      <ul>
      <li
        className="flex justify-between item-center mb-5 w-full">
        <div className="name">{props.name}</div>
        <span className="items-center">₹{props.cost}</span>
        <button
          className="bg-red-400 text-white rounded-md px-5 py-3  hover:bg-red-600"
          onClick={handleDelete}>
          <MdDelete />
        </button>
      </li>
      </ul>
    </div>
  );
};

export default ExpenseItem;
