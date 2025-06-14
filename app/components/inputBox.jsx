import React from 'react'

const InputBox = () => {
  return (
    <>
     
    <div className="flex items-center justify-center sm:w-[70%] w-[75%] sm:h-[25%] h-[10%] p-4 border-1 rounded-3xl shadow-md">

        <input
          type="text"
          placeholder="Type your prompt here..."
          className=" rounded-lg p-2 w-full outline-0 border-0"
        />
        <button className=" cursor-pointer  text-white p-4 rounded-full sm:text-2xl text-lg  mt-2">
          <i class="ri-send-plane-fill hover:opacity-90  transition-all "></i>
        </button>
    </div>
    
    </>
  )
}

export default InputBox