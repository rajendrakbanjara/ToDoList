import React from "react";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";


const TodoList = (props: any) => {

  //useState for mark the line
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
  return (
    <>
      <div className="flex items-center mt-4 mb-4 pl-2 pr-2">
        {/* <input type="radio" className=" size-6 mr-5 text-green-500" /> */}

        <input
          type="checkbox"
          className="form-checkbox my-4 h-6 w-6 rounded-full p-3 text-green-700 checked:bg-green-700 mr-4"
          name="radio"
          value="1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <li className={isChecked ? 'line-through' : ''}>{props.text}</li>
        <div
          className="ml-auto flex items-center"
          onClick={() => {
            props.onSelect(props.id);
          }}
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
