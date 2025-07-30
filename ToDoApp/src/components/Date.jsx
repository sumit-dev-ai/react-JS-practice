import React, { useEffect } from 'react'


export const ToDoDate = ({dateTime,  setDateTime}) => {
    //Date And Time

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`)


        }, 1000)

    return()=> clearInterval(interval);
}, []);

  return (
    <h1 className='text-white text-center font-bold mb-5 text-md'>{dateTime}</h1>
  )
}
