import React from "react";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import "../styles/search.css"
import { useState } from 'react';
import { Routes, Route, Link, Outlet,useNavigate } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
// const { Search } = Input;

// export default () => (

//   <div className="s1"> 

//   <div className="s2" >
//     <h1 style={{textAlign:"center", color:"white"}} className="w1">Find it. Tour it. Own it.!</h1>
//     <Search className="Search" placeholder="input search text" enterButton="Search" size="large"  />
//   </div>  

//   </div>
// );

const Search = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState();
  
  const onClick = (e) => {
    e.preventDefault();
    alert(inputs);
    navigate("/Rent", {
      state:inputs
});
  }

  return (<div className="s1">
    <div className="s2">
      <h1 style={{ textAlign: "center", color: "white" }} className="w1">Find it. Tour it. Own it.!</h1>
      <div className="s3">
        <input className="input" placeholder="ZIP code or address" type="text"  value={inputs||""} onChange={(e) => setInputs(e.target.value)} ></input>
        <div className="s4">
          <button className="button" onClick={onClick}><FaSearch size={30} /></button>
        </div>
        </div>
    </div>
  </div>);
}
export default Search;