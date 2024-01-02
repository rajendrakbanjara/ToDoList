import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
const TodoList = (props: any) => {

 

  return (
    <>
      <div className="flex mt-4 mb-4 ">
        <input type="radio" className="size-6 mr-5" />
        <li className="">{props.text}</li>
        <div 
          className="ml-auto bg-slate-300 rounded-full p-2"
          onClick={()=>{
            props.onSelect(props.id);
          }}
          >
          <RiDeleteBin6Fill />
        </div>
      </div>
      <hr className="border-stone-300" />
    </>
  );
};

export default TodoList;
