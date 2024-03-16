import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  const [factor, setfactor] = useState(1);

  function increCount() {
    setcount(count + factor);
  }

  function decreCount() {
    setcount(count - factor);
  }

  function increFactor() {
    setfactor(factor + 1);
  }

  function decreFactor() {
    setfactor(factor - 1);
  }

  //Syntax of useEffect
  //Run on component mounting and component update
  // useEffect(() => {
  // console.log('use effect runs')
  // })

  //when you give dependency it will only run one time for component mounting and not for component update
  //to run for component update you have to provide specific state for which you want to run useEffect
  //for example I am giving count then it will run only on updation of count 
//   useEffect(() => {
//     console.log("use effect runs");
//   },[count]);

  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={increCount}>Increment</button>
      <button onClick={decreCount}>Decrement</button>
      <h2>Set the factor {factor}</h2>
      <button onClick={increFactor}>Increment</button>
      <button onClick={decreFactor}>Decrement</button>
    </>
  );
};

export default Counter;
