import React from "react";
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
import styles from "../styles/sell.css"
var arr=new Array();
var coordinates=new Array(2);
const Sell=()=>{
    
    const navigate = useNavigate();
    var i=localStorage.getItem('LogInAccount');
    const [inputs, setInputs] = useState({});
    const [lat,setLat]=useState("");
    const[lgt,setLgt]=useState("");
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      arr.push(inputs);
      console.log(arr);
    }
    
    return(<>
    <div>
  <p>page 1 content</p>
  <button onClick={()=>navigate(-1)}>go back</button>
  </div>
        <h1 style={{marginLeft:"380px"}}>Sell your properities</h1>
        <form onSubmit={handleSubmit} style={{marginLeft:"250px"}}>
        <div className="ds">
             <label style={{ color:"red",fontSize:"large"}}>Id:
      <input style={{float:"right",width:"350px"}}
        type="number" 
        name="Id" 
        value={inputs.Id || ""} 
        onChange={handleChange}
      />
      </label>
        </div>
     
      <br/>
      <div className="ds">
          <label style={{ color:"red",fontSize:"large"}}> Name:
        <input 
        style={{float:"right",width:"350px"}}
          type="text" 
          name="Name" 
          value={inputs.Name || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
      
        <br/>
        <div className="ds">
            <label style={{ color:"red",fontSize:"large"}}> Owner:
        <input 
        style={{float:"right",width:"350px"}}
          type="text" 
          name="Owner" 
          value={inputs.Owner || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        
        <br/>
        <div className="ds">
            <label style={{ color:"red",fontSize:"large"}}>imge source:
        <input 
        style={{float:"right",width:"350px"}}
          type="text" 
          name="img" 
          value={inputs.img || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        
        <br/>
        <div className="ds">
             <label style={{ color:"red",fontSize:"large"}}>Build Time:
        <input 
        style={{float:"right",width:"350px"}}
          type="number" 
          name="BuildTime" 
          value={inputs.BuildTime || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
       
        <br/>
        <div className="ds">
            <label style={{ color:"red",fontSize:"large"}}>ZIP code:
        <input 
        style={{float:"right",width:"350px"}}
          type="number" 
          name="ZIP" 
          value={inputs.ZIP || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        
        <br/>
        <div className="ds" style={{height:"80px"}}>
            <label style={{ color:"red",fontSize:"large"}}>latitude,
        <input 
          type="number" 
          value={lat} 
          style={{float:"right",width:"350px"}}
          onChange={(e)=>{setLat(e.target.value)
      coordinates[0]={lat};
      }}
        />
        
        </label>
            <label style={{ color:"red",fontSize:"large"}}>longtitude:
                <input 
          type="number" 
          value={lgt} 
          style={{float:"right",width:"350px"}}
          onChange={(e)=>{setLgt(e.target.value)
      coordinates[1]={lgt};
      setInputs(values => ({...values, coordinates}))}}
        />
            </label>
            <a href="https://www.latlong.net/" target="view_window">get the lat and lgt</a>
        </div>
        
           
        <br/>
        <div className="ds">
            <label style={{ color:"red",fontSize:"large"}}>price:
        <input 
        style={{float:"right",width:"350px"}}
          type="number" 
          name="price" 
          value={inputs.price || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        
        <input style={{marginLeft:"200px" ,width:"100px",height:"50px"}} type="submit" />
    </form>
        </>);
    
    
}

export default Sell;