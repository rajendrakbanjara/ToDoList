"use client"
import React, { useState } from "react";
import TodoList from "./TodoList";

export default function Body() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState<string[]>([]);

  const itemEvent = (event: any) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => [...oldItems, inputList]);
    setInputList("");
  };

  const deleteItems = (id: any) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  return (
    <div className="bg-purple-900 min-h-screen flex flex-col items-center justify-center">
      <div className="ToDoListHeading font-sans font-semibold bg-white rounded-lg p-3 mb-4 text-xl">Make your To-Do</div>
      {/* Card section */}
      <div className="bg-white p-5 rounded-3xl w-full sm:w-2/3 lg:w-1/3  h-[34rem]">
        {/* Input field */}
        <div className="flex flex-col sm:flex-row mb-4">
          <input
            type="text"
            placeholder="Create your task here"
            value={inputList}
            onChange={itemEvent}
            className="border border-slate-300 p-3 mb-4 sm:mb-0 sm:mr-3 flex-grow"
          />
          <button
            type="button"
            className="bg-purple-900 text-white font-semibold px-7 py-2 rounded-md"
            onClick={listOfItem}
          >
            Add
          </button>
        </div>
        <hr className="border-stone-300 mb-4" />
        {/* show data field */}
        <div className="overflow-auto max-h-96">
          <ol>
            {Items.map((itemVal, index) => (
              <TodoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
