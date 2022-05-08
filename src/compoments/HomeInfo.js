import React from "react";
import rentInfo from "../data/home-rent.json"
import {
    useLocation
  } from "react-router-dom";
const HomeInfo=()=>{
    const params = useLocation();
    console.log(params.state)
    let i=params.state;
    return(<div>
    <img src={rentInfo.rentInfo[i-1].Detail.img} alt=""/>
    <h1>{rentInfo.rentInfo[i-1].Detail.Name}</h1>
    <p></p>
    <button onClick={()=>{rentInfo.rentInfo[i-1].Detail.Name="bai"}}></button>
    </div>
            );
}

export default HomeInfo;