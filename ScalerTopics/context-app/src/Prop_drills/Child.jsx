import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'
import '../index.css'
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function Child() {

    const Msg = useContext(FamilyContext)
  return (
    // <div className='child-div'>
    // <h4>Child:{Msg.secret}</h4>
    // <GrandDaughter Msg ={Msg}/>
    // <GrandSon Msg={Msg}/>
    // </div>
    //using context api

    <div className='child-div'>
    <h4>Child:{Msg.secret}</h4>
    <GrandDaughter />
    <GrandSon />
    </div>
  )
}

export default Child