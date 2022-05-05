import React from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';
const LogOrSign=()=>{
    return(<div >
        <h1>choose one</h1>
        <nav>
        <Link to="LogIn">LogIn</Link>
        <Link to="NewAccount">NewAccount</Link>
      </nav>

      <Outlet/>
        
    </div>)
    
}
export default LogOrSign;