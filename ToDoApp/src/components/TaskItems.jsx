import React from 'react'
import { MdCheck, MdDeleteForever, MdClose} from "react-icons/md";

export const TaskItems = ({ task, deleteData, toggleCheck, clearAllData }) => {

    return (
        <div className='mt-4'>
            <ul className='p-5 m-w-[500px]'>
                {
                    task.map((curTask, index) => (
                        <li key={index} className='text-2xl flex items-center 
                                justify-between   bg-white rounded-full px-10 py-1 m-2'>
                            {/* current task */}
                            <span
                                className={`text-black flex-1 ${curTask.isChecked ? 'line-through text-gray-500' : ''
                                    }`}
                            >
                                {curTask.content}
                            </span>
                            <button className={`rounded-full p-1 px-2  ${!curTask.isChecked ? 'text-green-400 hover:text-white cursor-pointer hover:bg-green-400':'text-red-400 hover:text-white cursor-pointer hover:bg-red-400' }`}
                             onClick={() => toggleCheck(curTask.id)}>
                               {!curTask.isChecked ? <MdCheck /> :<MdClose/> }  
                                </button>

                            <button className="text-red-500 hover:text-white 
                                    cursor-pointer hover:bg-red-400 rounded-full p-1"
                                onClick={() => deleteData(curTask.id)}
                            ><MdDeleteForever className='' />
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-center'>

                <button onClick={clearAllData} className='bg-orange-500   p-1 rounded-lg text-white hover:scale-105 hover:bg-orange-300 '>clear All</button>
            </div>
        </div>
    )
}
