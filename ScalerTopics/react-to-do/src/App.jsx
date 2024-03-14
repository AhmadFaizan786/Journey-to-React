import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TodoContainer from "./Components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState('');

  const [todos, settodos] = useState([])

  function writeTodo(e){
    setInputVal(e.target.value)
  }

  function addTodo(){
    if(inputVal != ''){
      settodos((prevTodos)=>[...prevTodos,inputVal])
      setInputVal('')
    }
  }

  function deleteTodo(todoIndex){
    settodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex != todoIndex
    }))
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
