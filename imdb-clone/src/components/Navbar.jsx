import React from "react";
import Imdblogo from "../assets/Imdblogo.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex border space-x-4 items-center pl-2 py-2">
      <img src={Imdblogo} className="w-[45px] "/>
      <Link to = "/" className="text-red-500 text-2xl font-bold" >Home</Link>
      <Link to = "/watchlist" className="text-blue-600 text-2xl font-bold">Watchlist</Link>
    </div>
  );
};

export default Navbar;
