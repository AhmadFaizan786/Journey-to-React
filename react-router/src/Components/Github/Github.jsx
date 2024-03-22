import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Github() {

  const data = useLoaderData()
  //optimizing below using useLoaderData hook
  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/hiteshchoudhary`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setdata(data)
  //   })
  // }, [])
  
  return (
    <div className='text-center m-4 p-4 text-white text-3xl bg-gray-600'>Github Followers :{data.followers}
    <div className='flex justify-around items-center'>
    <img  src={data.avatar_url} width={300} alt='git-picture' />
    <div className='text-lg'>Bio:{data.bio}</div>
    </div>
    
    </div>
  )
}

export default Github

//optimised way
export const gitInfoLoader = async() => {
  const response  = await fetch(`https://api.github.com/users/hiteshchoudhary`)
  return response.json()
}