import React from 'react'
import { useState } from 'react';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";  


const Questions = ({ title, info }) => {
    const [show, setShow] = useState(false); 
     const showDes = () => {
       setShow(!show);
     }; 
    return (
      <div className=' p-8 w-[900px] mb-4 border-2 border-gray-400 rounded-xl  '>
        <div className="flex justify-between  items-center  w-full h-full mb-2">
                <h1 className="text-3xl ">{ title}</h1>
          <button className="text-3xl" onClick={showDes}>
          
            {show ? <FaCircleMinus /> : <FaCirclePlus />}
          </button>
        </div>

            {show && <p>{info}</p>}
      </div>
    );
}

export default Questions
