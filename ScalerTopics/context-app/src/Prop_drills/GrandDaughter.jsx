import React from "react";
import "../index.css";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function GrandDaughter() {
    const Msg = useContext(FamilyContext)
  return (
    <div className="G-daugh">
      <h5>GrandDaughter:{Msg.secret}</h5>
    </div>
  );
}

export default GrandDaughter;
