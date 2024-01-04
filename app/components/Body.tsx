"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";
export default function Body() {
  const [inputList, setInputList] = useState("");
  // const [Items, setItems] = useState([]);
  const [Items, setItems] = useState<string[]>([]);

  const itemEvent = (event: any) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  // function for delete button
  const deleteItems = (id: any) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    // main body
    <div className="bg-purple-900">
      {/*Main Card div */}
      <div className="flex items-center justify-center h-screen">
        {/* card content */}
        <div className="bg-white min-w-max p-5 rounded-3xl h-2/3">
          {/* input elements */}
          <div className="flex">
            <input
              type="text"
              placeholder="Create your task here"
              onChange={itemEvent}
              className="border border-slate-300 mr-3 p-3"
            />
            <button
              type="button"
              className="bg-purple-900 text-white font-semibold px-7 py-2 rounded-[3px]"
              onClick={listOfItem}
            >
              add
            </button>
          </div>
          <hr className="border-stone-300 mt-6" />
          {/* add task */}
          <div className="max-h-full ">
            <ol>
              {Items.map((itemVal, index) => {
                return (
                  <TodoList
                    key={index}
                    id={index}
                    text={itemVal}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
