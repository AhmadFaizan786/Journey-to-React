import React,{useState} from 'react'

function Form() {

    // const [text, settext] = useState(' ')
    const [name, setname] = useState({firstName:'',lastName:''})

    // function handleChange(e){
    //     settext(e.target.value)
    // }
    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
    }

  return (
    <>
        <div>
            <form>
                {/* <input onChange={(e)=>settext(e.target.value)} type='text' value={text}></input> */}
                <label>First Name:</label>
                <input onChange={(e)=>setname({...name,firstName:e.target.value})} type='text' value={name.firstName}></input>
                <label>Last Name:</label>
                <input onChange={(e)=>setname({...name,lastName:e.target.value})} type='text' value={name.lastName}></input>

                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form