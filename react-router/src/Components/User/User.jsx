import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams() 
  return (
    <div className='text-3xl bg-gray-300 font-semibold text-center text-black'>User:{userid}</div>
  )
}

export default User