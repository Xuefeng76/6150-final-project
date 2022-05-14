import React from "react";
import "../styles/LogIn.css";
const LogIn=()=>{
    
  const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');

function op() {

  let firstname = document.getElementById("fname").value;

  let lastname = document.getElementById("lname").value;
  let uEmail=document.getElementById("email").value;
  let password = document.getElementById("pwd").value;
  if (firstname != 0 && lastname != 0 && password != 0 && uEmail!=0) {
    if (searchByName(firstname) == 0) {
      console.log("have existed" + firstname);
      alert(firstname + " have existed");

    } else {
      const myfirstAc = new account(firstname, lastname,uEmail, password);
      myArray.push(myfirstAc);
      // console.log(myArray);
      localStorage.setItem("accountData", JSON.stringify(myArray));
      console.log(myfirstAc.likelist);

      //   console.log(localStorage.getItem("accountData").);
      alert("sign up succeed");
      document.getElementById("fname").value = null;
      document.getElementById("lname").value = null;
      document.getElementById("email").value=null;
      document.getElementById("pwd").value = null;
      // for(let i=0;i<myArray.length;i++){
      //   if(myArray[i].firstName==firstname){
      //     let LikeList=[i]
      //     localStorage.setItem("LikeLists",JSON.stringify(LikeList));
      //   }
      // }
    }
  } else {
    alert("Incomplete Information!");
  }




  /* 
   console.log(myfirstAc.firstName+myfirstAc.lastName+myfirstAc.password);  */
  /* console.log(document.getElementById("one").value+document.getElementById("two").value); */
}
function account(first, last,email, ps) {
  this.firstName = first;
  this.lastName = last;
  this.Email=email;
  this.password = ps;
  this.likelist="";
  
}
function searchByName(name,email) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].firstName == name||myArray[i].Email==email) {
//store th i
      return 0;

      /* console.log("have existed");
            break; */
    }


    /* console.log("welcome"); */

  }
  return 1;
}


  // ==========================================================================
    return(<div className="login">
    <div className="card">
      <h3>CREATE ACCOUNT</h3>
      <form style={{height:"500px"}}>
        <input type="first name" id="fname" name="fname" placeholder="First Name" />
        <input type="Last Name" id="lname" name="lname" placeholder="Last Name" />
        <input type="email" id="email" name="email" placeholder="Your Email Addres" />
        <input type="password" id="pwd" name="password" placeholder="Password" />
        <div className="form-btn">
          <button onClick={op}>CREATE AN ACCOUNT</button>
          {/* <input type="submit" value="" /> */}
        </div>
        {/* <!-- <button onclick="clearf()">clear all</button> --> */}
      </form>
    </div>
  </div>);
}

export default LogIn;