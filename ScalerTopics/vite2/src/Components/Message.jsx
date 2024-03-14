import React from 'react'

function Message() {

    function sayHello(){
        console.log("Hello from hello function..")
    }
  return (
    <button onClick={sayHello}>Click me to say Hello </button>
  )
}

export default Message
