import React from "react";
import Parent from "./Parent";
import "../index.css";

function Family() {
    
  return (
    <div className="family-div">
        {/* <Parent Msg = {Msg}/> */}

        {/* Using Context Api */}
        <Parent/>
    </div>
  );
}

export default Family;
