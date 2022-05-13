import React, { createContext,useState } from "react";
import MyMapComponent from "./MyMapComponent";
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import rentInfo from "../data/home-rent.json"
import "../styles/rent.css";
import { FaDollarSign } from 'react-icons/fa';
import $ from 'jquery';
export const UserContext = createContext();


const Rent = () => {
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i = localStorage.getItem('LogInAccount');
    const navigate = useNavigate();
    const params = useLocation();
    const zipcode = params.state;
    //    useEffect(()=>{

    //    })
    if (zipcode != null) {
        return (<>
            <RentZip />
        </>);
    } else {
        return (<>
            {/* <button onClick={()=>{
            <p>111</p>
            
           
        }}>sort by price</button> */}
            <RentNoZipSort />
        </>);
    }

}



const RentZip = () => {
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i = localStorage.getItem('LogInAccount');
    const navigate = useNavigate();
    const params = useLocation();
    const zipcode = params.state;
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    return (<div>
<h1 style={{fontStyle:"italic",height:"50px",backgroundColor:"brown"}}> Rent Page</h1>
        <div style={{ float: "left" }}>
            <UserContext.Provider value={zipcode}>
                <MyMapComponent isMarkerShown />
            </UserContext.Provider>
        </div>



        {
            rentInfo.rentInfo.filter((rentIF) => {
                if (rentIF.Detail.ZIP == params.state) {
                    return rentIF;
                }
            }).map(rentIF => {

                console.log(rentIF.Detail.Id)
                return <div className="dr" style={{ float: "left" }} key={rentIF.Detail.Id}>
                    
                    <img src={rentIF.Detail.img} alt="zanwu" style={{ width: "345px", height: "200px" }} />
                    <h2>{rentIF.Detail.Name}</h2>
                    <p><FaDollarSign size={20}/>{rentIF.Detail.price}</p>
                    {/* <nav>
                        <Link to="/HomeInfo"></Link>
                    </nav>
                    <Outlet /> */}
                    {/* <p>{myArray[i].firstName}</p> */}
                    
                        {/* <div className={isActive?"is-active":"heart"} onClick={handleToggle}>?</div> */}
                        <div className="heartdiv">
                        <div className="heart" onClick></div>
                        
<div className="btnGroup">
                    <button id="bt2" onClick={() => {
                        if (i != null) {
                            if (myArray[i].likelist.indexOf(rentIF.Detail.Id) != -1) {
                                alert("this house is already on your list ")
                            } else {
                                var arr = (myArray[i].likelist).split("");
                                arr.push(rentIF.Detail.Id);
                                myArray[i].likelist = arr.join("");
                                localStorage.setItem("accountData", JSON.stringify(myArray));
                                
                                
                                setActive(!isActive);
                            }
                        } else {
                            alert("please log in at first");
                            navigate("../LogOrSign/NewAccount");
                        }


                    }}>{isActive?'SAVE':'SAVED'}</button>
                    </div>
                    <div className="btnGroup">
                    <button id="bt3" onClick={() => {
                        console.log(rentIF.Detail.ID)
                        navigate("/HomeInfo", {
                            state: rentIF.Detail.Id
                        });
                    }}>rent</button>
</div>
</div>
                </div>
            })
        }

    </div>);
}

$(function() {
    $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
    });
});

const RentNoZipSort = () => {
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i = localStorage.getItem('LogInAccount');
    const navigate = useNavigate();
    const params = useLocation();
    const zipcode = params.state;
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    return (<div>
<h1 style={{fontStyle:"italic",height:"50px",backgroundColor:"brown"}}> Rent Page</h1>
        <div className="dmap" style={{ float: "left" }}>
            <UserContext.Provider value={zipcode}>
                <MyMapComponent isMarkerShown className=""></MyMapComponent>

            </UserContext.Provider>
        </div>

        {/* <button className="bt2" onClick={()=>{
                    document.getElementsByClassName("bt2").innerHTML="111";
                }}>change color</button> */}

        {
            rentInfo.rentInfo.sort((a, b) => {
                return (a.Detail.price) - (b.Detail.price);
            })


                .map(rentIF => {

                    console.log(rentIF.Detail.Id)
                    
                    return <div className="dr" style={{ float: "left" }} key={rentIF.Detail.Id}>
                    
                        <img src={rentIF.Detail.img} alt="zanwu" style={{ width: "345px", height: "200px" }} />
                        <h2>{rentIF.Detail.Name}</h2>
                        <p><FaDollarSign size={20}/>{rentIF.Detail.price}</p>
                        {/* <nav>
                            <Link to="/HomeInfo"></Link>
                        </nav>
                        <Outlet /> */}
                        {/* <p>{myArray[i].firstName}</p> */}
                        
                            {/* <div className={isActive?"is-active":"heart"} onClick={handleToggle}>?</div> */}
                            <div className="heartdiv">
                            <div className="heart" onClick></div>
                            
<div className="btnGroup">
                        <button id="bt2" onClick={() => {
                            if (i != null) {
                                if (myArray[i].likelist.indexOf(rentIF.Detail.Id) != -1) {
                                    alert("this house is already on your list ")
                                } else {
                                    var arr = (myArray[i].likelist).split("");
                                    arr.push(rentIF.Detail.Id);
                                    myArray[i].likelist = arr.join("");
                                    localStorage.setItem("accountData", JSON.stringify(myArray));
                                    
                                    
                                    setActive(!isActive);
                                }
                            } else {
                                alert("please log in at first");
                                navigate("../LogOrSign/NewAccount");
                            }


                        }}>{isActive?'SAVE':'SAVED'}</button>
                        </div>
                        <div className="btnGroup">
                        <button id="bt3" onClick={() => {
                            console.log(rentIF.Detail.ID)
                            navigate("/HomeInfo", {
                                state: rentIF.Detail.Id
                            });
                        }}>rent</button>
</div>
</div>
                    </div>
                })
        }

    </div>);

}



export default Rent;