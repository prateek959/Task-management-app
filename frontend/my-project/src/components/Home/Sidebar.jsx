import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data = [
        {
            title: "All Tasks",
            icons:<CgNotes />,
            link:'/'
        },
        {
            title: "Important Tasks",
            icons:<MdLabelImportant />,
             link:'/importantTasks'
        },
        {
            title: "Completed Tasks",
            icons:<FaCheckDouble />,
             link:'/completedTasks'
        },
        {
            title: "Incomplete Tasks",
            icons:<TbNotebookOff />,
             link:'/incompletedTasks'
        },
    ];
    return (
        <>
            <div>
                <h2 className='text-xl font-semibold'>The Code Master</h2>
                <h2 className='mb-1 text-gray-400'>try@gmail.com</h2>
                <hr />
            </div>
            <div>
                {data.map((items, i) => {
                   return <Link to={items.link}  key={i} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'> {items.icons} &nbsp;&nbsp;{items.title}</Link>
                })}
            </div>
            <div><button className='bg-gray-600 w-full p-2 rounded'>Logout</button></div>
        </>
    )
}

export default Sidebar