import { useState } from "react";
import "../styles/navbar.css";
import { Routes, Route, Link } from 'react-router-dom';
import Avatar from 'react-avatar';
export default function Navbar() {
  const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // function logout(){
  //   localStorage.removeItem('LogInAccount');
  //   window.location.reload();
  //   alert("Logout Successfully!");
  // }
  var i=localStorage.getItem('LogInAccount');
  if(i!=null)
  {
    console.log(i)
    return (
    
    <nav className="navigation">
    <div className="fake"></div>
      <div className="da">
        <a href="/">
        <img style={{width:"200px"}} src="	https://s.zillowstatic.com/pfs/static/z-logo-default.svg"/>
      </a>
      </div>
      
     
      {/* <a href="/" className="brand-name">
        Zillow
      </a> */}

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul >
        <li style={{marginTop:"10px"}}>
          <Link to="/"><div className="s5">Home</div></Link>
          </li>
          <li style={{marginTop:"10px"}}>
          <Link to="/Rent" ><div className="s5">Rent</div></Link>
          </li>
          <li style={{marginTop:"10px"}}>
          <Link to="/HomePage"><div className="s5">HomePage</div></Link>
          </li>
         
          <li>
          <div className="s5">
             <h4 style={{marginBottom:"10px"}}>Welcome {myArray[i].firstName}  <Avatar name={myArray[i].firstName +" "+myArray[i].lastName} size="50"/></h4>
           
          </div>
           
            
          </li>
          {/* <li>
            <button id="logout" onClick={logout} >LogOut</button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
  }else{
    return (
    
      <nav className="navigation">
      <div className="fake"></div>
      <div className="da">
        <a href="/">
        <img style={{width:"200px"}} src="	https://s.zillowstatic.com/pfs/static/z-logo-default.svg"/>
      </a>
      </div>
         
        {/* <a href="/" className="brand-name">
          Zillow
        </a> */}
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Rent">Rent</Link>
            </li>
            <li>
            <Link to="/HomePage">HomePage</Link>
            </li>
           
            <li>
            <Link to="/LogOrSign">LogIn/SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
}
