import React from 'react'
import '../index.css'

function Banner() {
  return (
    <div className='h-[20vh] sm:h-[40vh] md:h-[60vh] lg:h-[85vh] bg-cover bg-no-repeat bg-center  flex items-end ' style={{backgroundImage:'url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className='text-white text-large bg-blue-900/70 w-full text-center p-2 bg-opacity-10' >Avengers Endgame</div>
    </div>
  )
}

export default Banner