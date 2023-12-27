
"use client";
import React, {useState} from 'react';
export default function Body(){

    const [inputList, setInputList] = useState("");
    // const [Items, setItems] = useState([]);
    const [Items, setItems] = useState<string[]>([]);
    
    const itemEvent = (event:any) =>{
        setInputList(event.target.value);
    };

    const listOfItem = () =>{
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
    };

    return(
        // main body
        <div className="">
            {/*Main Card div */}
            <div className="flex items-center justify-center h-screen">
                
                {/* card content */}
                <div className="bg-white w-[20%] p-10">
                    {/* input elements */}
                    <div className='flex'>
                        <input type="text" placeholder="Create your task here" onChange={itemEvent} className='border-s-gray-500'/>
                        <button type="button" className="bg-violet-600 text-white font-semibold px-5 py-2 rounded-sm" onClick={listOfItem}>add</button>
                    </div>
                
                {/* add task */}
                <div>
                     <ol>
                     {Items.map((itemVal)=>{
                        return(
                        <div className='flex'>
                         <input type='radio'/> <li>{itemVal}</li>
                        </div>
                        
                        ); 
                     })}
                     </ol>
                </div>

                    
                </div>
            </div>
        </div>
    );
}
