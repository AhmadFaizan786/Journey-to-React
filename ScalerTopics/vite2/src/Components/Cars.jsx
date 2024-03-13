import React from 'react'

function Cars() {
    let cars = ["BMW", "Audi", "Ferrari", "Mercedes"]
  return (
    <>
    {cars.map((car)=>(
        <h3 key={car}>{car}</h3>
    ))}
    </>
  )
};

export default Cars