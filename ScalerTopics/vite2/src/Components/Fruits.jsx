import React from "react";

function Fruits() {
  let fruits = [
    { name: "apple", price: "100rs" },
    { name: "mango", price: "80rs" },
    { name: "banana", price: "60rs" },
  ];
  return(
    <div>{fruits.map((fruit)=>(
        <li key={fruit.name}>{fruit.name}-{fruit.price}</li>
    ))}</div>
  )
};

export default Fruits;
