import React, { useState } from 'react';

export const LoginForm = () => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(loginData)
    }
    const loginData={
        email,pass
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-full max-w-sm'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>

                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='border rounded-md w-full mb-4 p-2'
                    required
                />

                <input
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                    className='border rounded-md w-full mb-4 p-2'
                    required
                />

                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
                >
                    Login
                </button>
            </form>
        </div>
    );
};
