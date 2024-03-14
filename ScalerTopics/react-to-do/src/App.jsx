import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <main>

      <h1>To Do List</h1>

      <div className='input-container'>
        <input type='text'></input>
        <button>+</button>
      </div>

      <div className='container'>
       <div className='tasks'>
       <p>Complete React Course Tutorials</p>

       <div className='action-btn'>
        <input type='checkbox'/>
        <button>Delete</button>
       </div>
       </div>

      </div>
     </main>
  )
}

export default App
