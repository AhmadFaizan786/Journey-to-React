import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const PrevCount = () => {
    if (counter === 1) {
      setCounter(counter);
    } else{
      setCounter(counter - 1);
    }
  };

  const NextCount = () => {
    if(counter === 10){
      setCounter(counter)
    }else{
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={PrevCount}>Prev</button>
      <button onClick={NextCount}>Next</button>
    </>
  );
}

export default App;
