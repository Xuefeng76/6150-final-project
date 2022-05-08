import React from "react";
import {useNavigate } from 'react-router-dom';
const Sell=()=>{
    const navigate = useNavigate();
    var i=localStorage.getItem('LogInAccount');
    if(i!=null){
    return(<>
        <h1>Sell your properities</h1>
        <label>name</label>
        <input></input>
        <label>Id</label>
        <input></input>
        </>);
    }else{
        alert("please login first");
        navigate("../LogOrSign/NewAccount");
        return(
            <><button onClick={()=>{navigate("../LogOrSign/NewAccount");}}>go to log index</button></>
        )
    }
    
}

export default Sell;