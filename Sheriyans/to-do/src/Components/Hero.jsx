import React from "react";

function Hero({title,desc,settitle,setdesc,submitHandler}) {
  
  return (
    <>
      <form className="flex justify-center gap-4 w-full flex-wrap " >
        <input
          type="text"
          placeholder="Enter title here"
          className="border-zinc-500 border-4 m-8 px-4 py-2 font-semibold"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input
          value={desc}
          type="text"
          placeholder="Enter task here"
          className="border-zinc-500 border-4 m-8 px-4 py-2 font-semibold"
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button onClick={submitHandler} className="bg-black text-white px-3 py-2 text-xl m-8 rounded font-serif">
          Add Task
        </button>
      </form>
    </>
  );
}

export default Hero;
