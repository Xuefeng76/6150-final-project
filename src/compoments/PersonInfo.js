import React from "react";
import Avatar from 'react-avatar';
import styles from "../styles/PersonalInfo.css"
const PersonInfo=()=>{
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i=localStorage.getItem('LogInAccount');
    function logout(){
        localStorage.removeItem('LogInAccount');
        window.location.reload();
        alert("Logout Successfully!");  
      }
    return(<div>
    <br/>
    <br/>
    <div className="dps" >
        <h1>Hello {myArray[i].firstName}</h1>
        <div className="avatar">
            <Avatar name={myArray[i].firstName +" "+myArray[i].lastName} size="150"/>
        </div>
        
        <h2>Your Email: {myArray[i].Email}</h2>
        <div className="logout"><button id="logoutbtn" onClick={logout} >LogOut</button></div>
    </div>       
    </div>
    );
}

export default PersonInfo;