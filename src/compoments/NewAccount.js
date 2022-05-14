import React from "react";
import { Link } from "react-router-dom";
import "../styles/LogIn.css";
import {useNavigate } from 'react-router-dom';
const NewAccount=()=>{
  const navigate = useNavigate();
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    function Lop(){
        let Lguseremail=document.getElementById("Lemail").value;
        let Lgpassword=document.getElementById("Lpassword").value;
        if(Lguseremail!=0&&Lgpassword!=0){
          if(VerifyAccount(Lguseremail,Lgpassword)==0){
            alert("Login Successful!");
            // window.open("http://localhost:3001/","_blank");
            navigate("/");
            window.location.reload();
            // var ii=localStorage.getItem('LogInAccount');
            // document.getElementById("reloadText").innerHTML=myArray[ii].firstName;
            
          }else{
            alert("Username or Password is Incorrect!");
      
          }
        }else{
          alert("Incomplete Information");
        }
      }
      function VerifyAccount(email,password){
        for (let i = 0; i < myArray.length; i++) {
          if(myArray[i].Email==email&&myArray[i].password==password){
            localStorage.setItem("LogInAccount", i);
           
            return 0;
          }
        }
        return 1;
      }








    return(<div className="login">
    <div className="card">
      <h3>SIGN IN</h3>
      <form style={{height:"300px"}}>
        <input type="email" id="Lemail" name="email" placeholder="Your Email Addres" />
        <input type="password" id="Lpassword" name="password" placeholder="Password" />
        <div className="form-btn">
        
          <button onClick={Lop}>SIGN IN</button>
          <button onClick={()=>{localStorage.clear();}}>clear all</button>
        {/* <input type="submit" value="SIGN IN" /> */}
          
        </div>
      </form>
      <div>
         <a href="" onClick={()=>{navigate("../logIn");}}>If You Are New, Click Here!</a>
      </div>
      
      
    </div>
  </div>);
}

export default NewAccount;