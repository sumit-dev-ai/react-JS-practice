import React from 'react'
import { useState } from 'react'
export const Form = () => {
    const [user , setUser]=useState({
        firstName : "",
        lastName : "",
        email: "",
        password: "",
        phoneNumber : "",
    })

const setUserData=(e)=>{
    const {name , value}=e.target;
    console.log(user)
    setUser((prev)=>({...prev, [name]:value}))
};

const handleSubmit=(e)=>{
    e.preventDefault()
    
}

    return (
        <div className='flex items-center justify-center max-w-[1640px] h-screen bg-gray-200'>
            <form className='bg-white flex flex-col shadow-xl p-5 rounded-md' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold mb-2'>Sign Up</h1>
                <p className='font-sm text-sm mb-1 pr-2'>Please fill in this form to create an account!</p>
                <input type="text" name='firstName' placeholder='Enter your first-name' required
                 className='border rounded-md mb-3 p-1' value={user.firstName} onChange={setUserData}/>

                <input type="text" name='lastName' placeholder='Enter your last-name' required 
                className='border rounded-md mb-3 p-1' value={user.lastName} onChange={setUserData}/>

                <input type="text" name='email' placeholder='Enter Your Email' required
                 className='border rounded-md mb-3 p-1' value={user.email} onChange={setUserData}/>

                <input type="password" name='password' placeholder="Enter your password" required
                 className='border rounded-md mb-3 p-1' value={user.password} onChange={setUserData}/>

                <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="border rounded-md mb-3 p-1" value={user.phoneNumber} onChange={setUserData}
                />
                <button
                    type="submit"
                    className=" w-full h-8 border mx-auto bg-blue-500 text-white hover:scale-105 hover:bg-orange-300 rounded-md mb-3 p-1 cursor-pointer"
                >Sign Up </button>

            </form>
        </div>
    )
}
