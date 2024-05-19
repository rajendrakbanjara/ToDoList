"use client"
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoList = (props: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="flex items-center mt-4 mb-4 px-2 sm:px-4">
        <input
          type="checkbox"
          className="form-checkbox my-4 h-6 w-6 rounded-full p-3 text-green-700 checked:bg-green-700 mr-4"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <li className={`flex-grow ${isChecked ? 'line-through' : ''}`}>
          {props.text}
        </li>
        <div
          className="ml-auto flex items-center cursor-pointer"
          onClick={() => props.onSelect(props.id)}
        >
          <p className="bg-slate-400 p-2 rounded-full">
            <RiDeleteBin6Fill />
          </p>
        </div>
      </div>
      <hr className="border-stone-300" />
    </>
  );
};

export default TodoList;
