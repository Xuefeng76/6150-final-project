import React from "react";
import { Routes, Route, Link, Outlet,useNavigate } from 'react-router-dom';
import styles from "../styles/HomePage.css"
const HomePage=()=>{
    const navigate = useNavigate();
    var i=localStorage.getItem('LogInAccount');
    if(i!=null){
    return(
        <div className="md">
        <h1 style={{fontStyle:"italic"}}> Personal Info</h1>
        <div className="SB"><Link to="Sell"><h2>Sell</h2></Link></div>
        <div className="SB"><Link to="Buy"><h2>/Buy</h2></Link></div>
            
            
            <Outlet/>
      
        </div>
    );
    }else{
        alert("please log in at first");
        navigate("../LogOrSign/LogIn");
    }
}

export default HomePage;