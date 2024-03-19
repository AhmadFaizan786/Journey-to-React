import React from "react";
import "../index.css";
import Child from "./Child";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function Parent() {

    const Msg = useContext(FamilyContext)
    
  return (
    <div className="parents-div">
      <h1>Parent: {Msg.secret}</h1>
      <Child  />
    </div>
  );
}

export default Parent;
