//This one has all the components in a single jsx file
import React, { useEffect, useState } from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";


export const Todo = () => {
    const [inputVal, setInputVal] = useState("")
    const [task, setTask] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //no empty values 
        if (!inputVal) return;

        //ignoring same values
        if (task.includes(inputVal)) {
            setInputVal("") //no value on UI
            return;
        }

        //adding data after validation
        else {
            setTask((prev) => [...prev, inputVal])
            setInputVal("")
        }
    }

    //Date And Time
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`)


        }, 1000)

    return()=> clearInterval(interval);
}, []);

//Deleting all data

const clearAllData=()=>{
    setTask([]);
}
//Deleing single task

const deleteData=(valueToDel)=>{
 const updateTask=task.filter((curTask)=>(curTask!==valueToDel));  
setTask(updateTask);
}

return (

    <section className='flex flex-col items-center  h-screen bg-gray-900'>
        <div className='border border-2 rounded-lg mt-15 p-5 '>
            <header>
                <h1 className='text-white text-center font-bold mb-5 text-2xl'>Todo List</h1>
                <h1 className='text-white text-center font-bold mb-5 text-md'>{dateTime}</h1>

            </header>
            {/* form */}
            <section className='form'>
                <form action="" className="flex" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        className="bg-white text-black border border-gray-300 rounded-l-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        autoComplete="off"
                        value={inputVal}
                        onChange={(e) => (setInputVal(e.target.value))}

                    />
                    {/* task button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-1 rounded-r-md hover:bg-orange-600"
                    >
                        Add Task
                    </button>
                </form>


            </section>
            {/* Display tasks */}
            <div className='mt-4'>
                <ul>
                    {
                        task.map((curTask, index) => (
                            <li key={index} className='text-2xl w-[90%] flex items-center 
                                justify-between   bg-white rounded-full px-10 py-1 m-2'>
                                <span className='text-black flex-1  '>{curTask}</span>
                                <button className='text-green-400 hover:text-white 
                                    cursor-pointer hover:bg-green-400 rounded-full p-1 '
                                ><MdCheck className='' /> </button>
                                <button className="text-red-500 hover:text-white 
                                    cursor-pointer hover:bg-red-400 rounded-full p-1"
                                    onClick={()=>deleteData(curTask)}
                                    ><MdDeleteForever className='' />
                                </button>
                            </li>
                        ))
                    }
                    {/* Clear all button */}
                    <button onClick={clearAllData} className='bg-orange-500 absolute left-1/2 -translate-x-1/2 p-1 rounded-lg text-white hover:scale-105 hover:bg-orange-300 '>clear All</button>
                </ul>
            </div>
        </div>
    </section>

)
}
