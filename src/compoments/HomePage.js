import React from "react";
import { Routes, Route, Link, Outlet,useNavigate } from 'react-router-dom';
const HomePage=()=>{
    const navigate = useNavigate();
    var i=localStorage.getItem('LogInAccount');
    if(i!=null){
    return(
        <div>
        <h1> personal Info</h1>
            <Link to="Sell">Sell</Link>
            <Link to="Buy">Buy</Link>
            <Outlet/>
      
        </div>
    );
    }else{
        alert("please log in at first");
        navigate("../LogOrSign/LogIn");
    }
}

export default HomePage;