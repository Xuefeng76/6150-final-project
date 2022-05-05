import React from "react";
import MyMapComponent from "./MyMapComponent";
import { Routes, Route, Link,Outlet } from 'react-router-dom';
const Rent=()=>{

    return(<><p>rent page</p>
    <div>
        <div style={{float:"left"}}>
            <MyMapComponent isMarkerShown />
        </div>
        
        <div style={{float:"left"}}>
            <img src={require('../img/search.jpg')} alt="zanwu" style={{width:"300px",height:"400px"}}/>
            <h2>House name</h2>
            <p>some description</p>
            <nav>
                 <Link to="/HomeInfo">Rent</Link>
            </nav>
            <Outlet/>
        </div>
    </div>
    </>);
}

export default Rent;