import React from "react";
import "../styles/LogIn.css";
const NewAccount=()=>{
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    function Lop(){
        let Lguseremail=document.getElementById("Lemail").value;
        let Lgpassword=document.getElementById("Lpassword").value;
        if(Lguseremail!=0&&Lgpassword!=0){
          if(VerifyAccount(Lguseremail,Lgpassword)==0){
            alert("Login Successful!");
            window.open("http://localhost:3002/","_blank");
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








    return(<div class="login">
    <div className="card">
      <h3>SIGN IN</h3>
      <form>
        <input type="email" id="Lemail" name="email" placeholder="Your Email Addres" />
        <input type="password" id="Lpassword" name="password" placeholder="Password" />
        <div className="form-btn">
          <button onClick={Lop}><input type="submit" value="SIGN IN" /></button>
        </div>
      </form>
      <ul>
        <li><a href="newAccount.html">If You Are New, Click Here!</a></li>
      </ul>
    </div>
  </div>);
}

export default NewAccount;