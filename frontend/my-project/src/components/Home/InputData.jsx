import React from 'react'
import { RxCross2 } from "react-icons/rx";

const InputData = ({InputDiv, setInputDiv}) => {
    
    return (
        <>
            <div className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-80 w-full h-screen`}></div>
            <div className={`${InputDiv} top-0 left-0 flex items-center justify-center w-full h-screen`}>
                <div className='w-2/6 bg-gray-800 p-4 rounded'>
                <div className='flex justify-end'>
                    <button className='text-2xl' onClick={() => setInputDiv("hidden")}>
                <RxCross2 />
                    </button>
                </div>
            <input type="text" name="title" placeholder='title' className='px-3 py-2 rounded w-full bg-gray-700 my-3'/>
            <textarea name="desc" cols="30" rows="10" placeholder='Enter Description..' className='px-3 py-2 rounded w-full bg-gray-700 my-3'></textarea>
            <button className='px-3 py-2 bg-blue-400 rounded text-xl text-black font-semibold'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default InputData