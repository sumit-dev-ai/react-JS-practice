import { useState } from 'react'
import { Form } from './components/Form'
import { LoginForm } from './components/LoginForm'
import { ContactForm } from './components/ContactForm'
function App() {
  const [check, setCheck] = useState(1)

  return (
    <>
    <div className='flex justify-center absolute left-1/2 -translate-x-1/2 top-2'>
    <button className='p-1 border m-2 rounded-md bg-blue-500 hover:bg-orange-500 text-white'  onClick={()=>setCheck(1)}>Login </button>
    <button  className='p-1 border m-2 rounded-md bg-blue-500 hover:bg-orange-500 text-white' onClick={()=>setCheck(2)}>SignUp </button>
    <button  className='p-1 border m-2 rounded-md bg-blue-500 hover:bg-orange-500 text-white' onClick={()=>setCheck(3)}>Contact </button>

    </div>
     {check===1 && <LoginForm />}
     {check===2 && <Form />}
     {check===3 && <ContactForm />}

    </>
  )
}

export default App
