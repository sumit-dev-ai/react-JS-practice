import { useState } from 'react'
import { Todo } from './components/Todo'
import { TodoCom } from './components/TodoMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todo /> */}
      <TodoCom />
        
    </>
  )
}

export default App
