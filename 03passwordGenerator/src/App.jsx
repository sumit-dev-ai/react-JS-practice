import { useState,useCallback, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(4)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setPassword]=useState("")
  //ref hook to store the password
  const passwordRef = useRef(null)
  const PasswordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str+="~!@#$%^&*(){}";
    // copt to clpboard
    




    for(let i=1; i<=length; i++){
      const char=Math.floor(Math.random()*str.length);
      pass+=str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword ])


  useEffect(() => {
    PasswordGenerator();
  }, [length,numberAllowed,charAllowed,PasswordGenerator]);
const copyPasswordToClipboard= useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
},[password]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
          <h2 className='w-full text-center text-white'>Password Generator</h2>
        <div className= 'flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}

          placeholder='Password'
          className='w-full outline-none py-1 px-3 bg-white text-black border border-gray-400 m-3 rounded-lg'
          readOnly
          ref={passwordRef}

          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-3'>
            <input type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e)=>setLength(e.target.value)}
              className='w-full outline-none cursor-pointer'
            /> <label > length {length}</label>
          <div className=' flex items-center gap-x-2'>
            <input type="checkbox"
              checked={numberAllowed}
              onChange={(e)=>setNumberAllowed(e.target.checked)}
            />
            <label>Numbers</label>
          </div>
          <div className=' flex items-center gap-x-2'>
            <input type="checkbox"
              checked={charAllowed}
              onChange={(e)=>setcharAllowed(e.target.checked)}
            />
            <label>characters</label>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
