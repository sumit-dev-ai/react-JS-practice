//This one has Different components for different features like TodoForm todotask
import React, { useEffect, useState } from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from './TodoForm';
import { TaskItems } from './TaskItems';
import { ToDoDate } from './Date';
import { setDataFromLocalStorage , getDataFromLocalStorage } from './DataLocalStorage';
export const TodoCom = () => {
  const [inputVal, setInputVal] = useState({ id: null, content: "", isChecked: false })
  const [task, setTask] = useState(getDataFromLocalStorage())
  const [dateTime, setDateTime] = useState("")


  // Save to localStorage whenever `task` changes
  useEffect(() => {
    setDataFromLocalStorage(task);
  }, [task]);

  // We are changling value of isChecked here
  const toggleCheck = (id) => {
    setTask(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // step 3 destruct
    const content = inputVal.content.trim()

    //step 4 checking input field is empty or not

    if (!content) return;

    //step 5 ignoring duplicate values
    const doExists = task.find((curTask) => curTask.content === content)
    if (doExists) {
      return;
    }
    const newTask = {
      id: Date.now(),
      content,
      isChecked: false
    }
    setTask([...task, newTask]);
    //    cleanup function
    setInputVal({ id: null, content: "", isChecked: false });


  }



  //Deleting all data

  const clearAllData = () => {
    setTask([]);
  }
  //Deleing single task

  const deleteData = (id) => {
    const updateTask = task.filter((curTask) => curTask.id !== id);
    setTask(updateTask);
  };





  return (

    <section className='flex flex-col items-center bg-gray-900 min-h-screen overflow-hidden'>
      <div className='border border-2 rounded-lg mt-15 p-5 '>
        <header>
          <h1 className='text-white text-center font-bold mb-5 text-2xl'>Todo List</h1>
          {/* Date and time  */}
          <ToDoDate setDateTime={setDateTime} dateTime={dateTime} />

        </header>
        <TodoForm inputVal={inputVal}
          setInputVal={setInputVal}
          handleFormSubmit={handleFormSubmit} />
        {/* Display tasks */}
        <TaskItems
          task={task}
          deleteData={deleteData}
          clearAllData={clearAllData}
          toggleCheck={toggleCheck}
        />
      </div>
    </section>

  )
}
