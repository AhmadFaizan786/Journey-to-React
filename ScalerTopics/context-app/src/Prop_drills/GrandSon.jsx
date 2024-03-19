import React from "react";
import "../index.css";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function GrandSon() {
    const Msg = useContext(FamilyContext)
  return (
    <div className="G-son">
      <h5>GrandSon:{Msg.secret}</h5>
    </div>
  );
}

export default GrandSon;
