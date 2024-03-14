import React,{useState} from 'react'

const Counter = () => {

    const [count, setcount] = useState(0)
    const [factor, setfactor] = useState(1)

    function increCount(){
        setcount(count+factor)
    }

    function decreCount(){
        setcount(count-factor)
    }

    function increFactor(){
        setfactor(factor+1)
    }

    function decreFactor(){
        setfactor(factor-1)
    }
  return (
    <>
        <h1>Counter:{count}</h1>
        <button onClick={increCount}>Increment</button>
        <button onClick={decreCount}>Decrement</button>
        <h2>Set the factor {factor}</h2>
        <button onClick={increFactor}>Increment</button>
        <button onClick={decreFactor}>Decrement</button>
    </>
  )
}

export default Counter