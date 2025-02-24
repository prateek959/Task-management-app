import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";


const Card = ({home, setInputDiv}) => {

    const data = [
        {
            title: "Introduction to JavaScript",
            description: "A beginner's guide to learning JavaScript, covering basic concepts and syntax.",
            status:"In Complete"
        },
        {
            title: "Web Development Basics",
            description: "An overview of the foundational skills needed for web development, including HTML, CSS, and JavaScript.",
             status:"Complete"
        },
        {
            title: "Machine Learning 101",
            description: "An introduction to machine learning, exploring algorithms, data sets, and model training.",
             status:"In Complete"
        },
        {
            title: "React for Beginners",
            description: "A beginner-friendly tutorial on building interactive user interfaces using React.",
             status:"In Complete"
        }
    ];


    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {data.map((items, i) => {
                return (
                    <div key={i} className='flex flex-col justify-between bg-gray-800 rounded-xl p-4'>
                        <div >
                            <h3 className='text-xl font-bold'>{items.title}</h3>
                            <p className='text-gray-300 my-2'>{items.description}</p>

                        </div>
                        <div className='mt-4 w-full flex items-center'>
                            <button className={`${items.status === 'In Complete'?'bg-red-400':'bg-green-700'} p-2 rounded w-3/6`}>{items.status}</button>
                            <div className='w-3/6 text-white p-2 text-2xl font-semibold flex justify-around'>
                                <button><CiHeart /></button>
                                <button><FaEdit /></button>
                                <button><MdDelete /></button>
                            </div>
                        </div>
                    </div>
                );
            })}
            {home === "true" && <button onClick={() => setInputDiv('fixed')} className='flex flex-col justify-center items-center bg-gray-800 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
            <IoAddCircleSharp className='text-5xl' />
                <h2 className='text-2xl mt-4'>Add Task</h2>
            </button>}
            
        </div>
    )
}

export default Card;
