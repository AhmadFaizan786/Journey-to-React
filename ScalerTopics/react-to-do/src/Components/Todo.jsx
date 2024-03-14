import React from 'react'

function Todo({todo,index, deleteTodo}) {
  return (
    <div className="tasks">
        <p>{todo}</p>

        <div className="action-btn">
          <input type="checkbox" />
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      </div>
  )
}

export default Todo