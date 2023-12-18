import { useState } from 'react'
import './App.css'
import ToDo from './toDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDo></ToDo>
    </>
  )
}

export default App