import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  
  const onSubmit = (event) => {
    event.preventDefault();
    setCost("");
    setName("")

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost)
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="justify-center mb-10 h-full bg-gray-500no place-items-center">
        <label className="mr-5 text-lg font-semibold" htmlFor="">
          Message:
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="border border-gray-300 rounded px-4 py-2 mr-5 mb-4"
          id="name"
          required="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label className="mr-5 text-lg font-semibold" htmlFor="">
            Amount:
          </label>
          <input
            type="number"
            placeholder="Enter number"
            className="border border-gray-300 rounded px-4 py-2 mb-4 "
            id="cost"
            required="required"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-5 rounded ">
          Save
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
