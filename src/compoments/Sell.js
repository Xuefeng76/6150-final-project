import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../styles/sell.css"
var arr = new Array();
var coordinates = new Array(2);
const Sell = () => {
  
  const navigate = useNavigate();
  var i = localStorage.getItem('LogInAccount');
  const [inputs, setInputs] = useState({});
  const [lat, setLat] = useState(0);
  const [lgt, setLgt] = useState(0);

const handleLat=(event)=>{
    setLat(event.target.value)
      coordinates[0]={lat};
  }
  // useEffect(()=>{
    
  //   handleLat();
  // },[lat]);

  function handleLgt(event){
    setLgt(event.target.value)
    coordinates[1]={lgt};
    setInputs(values => ({ ...values,  coordinates }))
  }
  // useEffect(()=>{
    
  //   handleLgt();
  // },[lgt]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // useEffect(()=>{
    
  //   handleChange();
  // },[inputs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(inputs);
    arr.push(inputs);
    arr[0].coordinates=[lat,lgt];
    console.log(arr);
  }
  return (<>
  <br/>
  <br/>
  <div className="btnGroup">
     <button id="bt3" onClick={()=>navigate(-1)} style={{fontStyle:"italic"}}>go back</button>
 </div>
 
    
<div className="ds">
<form onSubmit={handleSubmit}>
    <label style={{width:"500px",height:"50px",fontSize:"30px"}}>Sell your properities</label>
    <br/>
      <label>Enter your ID:
      <input 
        type="number" 
        name="HouseID" 
        value={inputs.HouseID || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your House's name:
        <input 
          type="text" 
          name="HouseName" 
          value={inputs.HouseName || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your Owner's name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your image:
        <input 
          
          name="imgSource" 
          value={inputs.imgSource || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your BuildTime:
      <input 
        type="number" 
        name="BuildTime" 
        value={inputs.BuildTime || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your ZIP:
        <input 
          type="number" 
          name="ZipCode" 
          value={inputs.ZipCode || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your lat:<a href="https://www.latlong.net/" target="view_window">get the lat and lgt</a>
      <input 
        
        name="lat" 
        value={lat} 
        onChange={
          
      //     (e)=>{setLat(e.target.value)
      // coordinates[0]={lat};
      // }
      handleLat
      }
      />
      </label>
      <label>Enter your lgt:
      <input 
         
        name="lgt"
        value={lgt}
        onChange={
      //     (e)=>{setLgt(e.target.value)
      // coordinates[1]={lgt};
      // setInputs(values => ({...values, coordinates}))}
      handleLgt
      }
      />
      </label>
      <label>Enter your price:
        <input 
          type="number" 
          name="zip" 
          value={inputs.zip || ""} 
          onChange={handleChange}
        />
        </label>
        
        <input style={{marginTop:"30px"}} type="submit" />
    </form>
</div>
    
  </>);




















  //   return(<>
  //   <div>
  // <p>page 1 content</p>
  // <button onClick={()=>navigate(-1)}>go back</button>
  // </div>
  //       <h1 style={{marginLeft:"380px"}}>Sell your properities</h1>
  //       <form onSubmit={handleSubmit} style={{marginLeft:"250px"}}>
  //       <div className="ds">
  //            <label style={{ color:"red",fontSize:"large"}}>Id:
  //     <input style={{float:"right",width:"350px"}}
  //       type="number" 
  //       name="Id" 
  //       value={inputs.Id || ""} 
  //       onChange={handleChange}
  //     />
  //     </label>
  //       </div>

  //     <br/>
  //     <div className="ds">
  //         <label style={{ color:"red",fontSize:"large"}}> Name:
  //       <input 
  //       style={{float:"right",width:"350px"}}
  //         type="text" 
  //         name="Name" 
  //         value={inputs.Name || ""} 
  //         onChange={handleChange}
  //       />
  //       </label>
  //     </div>

  //       <br/>
  //       <div className="ds">
  //           <label style={{ color:"red",fontSize:"large"}}> Owner:
  //       <input 
  //       style={{float:"right",width:"350px"}}
  //         type="text" 
  //         name="Owner" 
  //         value={inputs.Owner || ""} 
  //         onChange={handleChange}
  //       />
  //       </label>
  //       </div>

  //       <br/>
  //       <div className="ds">
  //           <label style={{ color:"red",fontSize:"large"}}>imge source:
  //       <input 
  //       style={{float:"right",width:"350px"}}
  //         type="text" 
  //         name="img" 
  //         value={inputs.img || ""} 
  //         onChange={handleChange}
  //       />
  //       </label>
  //       </div>

  //       <br/>
  //       <div className="ds">
  //            <label style={{ color:"red",fontSize:"large"}}>Build Time:
  //       <input 
  //       style={{float:"right",width:"350px"}}
  //         type="number" 
  //         name="BuildTime" 
  //         value={inputs.BuildTime || ""} 
  //         onChange={handleChange}
  //       />
  //       </label>
  //       </div>

  //       <br/>
  //       <div className="ds">
  //           <label style={{ color:"red",fontSize:"large"}}>ZIP code:
  //       <input 
  //       style={{float:"right",width:"350px"}}
  //         type="number" 
  //         name="ZIP" 
  //         value={inputs.ZIP || ""} 
  //         onChange={handleChange}
  //       />
  //       </label>
  //       </div>

  //       <br/>
  //       <div className="ds" style={{height:"80px"}}>
  //           <label style={{ color:"red",fontSize:"large"}}>latitude,
  //       <input 
  //         type="number" 
  //         value={lat} 
  //         style={{float:"right",width:"350px"}}
  //         onChange={(e)=>{setLat(e.target.value)
  //     coordinates[0]={lat};
  //     }}
  //       />

  //       </label>
  //           <label style={{ color:"red",fontSize:"large"}}>longtitude:
  //               <input 
  //         type="number" 
  //         value={lgt} 
  //         style={{float:"right",width:"350px"}}
  //         onChange={(e)=>{setLgt(e.target.value)
  //     coordinates[1]={lgt};
  //     setInputs(values => ({...values, coordinates}))}}
  //       />
  //           </label>
  //           <a href="https://www.latlong.net/" target="view_window">get the lat and lgt</a>
  //       </div>


  //       <br/>
  //       <div className="ds">
  //           <label style={{ color:"red",fontSize:"large"}}>price:
  //       <input 
  //       style={{float:"right",width:"350px"}}
  //         type="number" 
  //         name="price" 
  //         value={inputs.price || ""} 
  //         onChange={handleChange}
  //       />
  //       </label>
  //       </div>

  //       <input style={{marginLeft:"200px" ,width:"100px",height:"50px"}} type="submit" />
  //   </form>
  //       </>);


}

export default Sell;