import React from 'react'

export const TodoForm = ({inputVal, setInputVal,handleFormSubmit}) => {
      const handleValue=(e)=>{
        //step 1
        const value=e.target.value
            setInputVal({...inputVal,content:value})
            }
    return (
    
                <section >
               
                    <form action="" className="flex justify-center" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            className="bg-white text-black border border-gray-300 rounded-l-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            autoComplete="off"
                            // step 2
                            value={inputVal.content}
                            onChange={handleValue}
    
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
  );
}
