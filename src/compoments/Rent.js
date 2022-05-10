import React, { createContext } from "react";
import MyMapComponent from "./MyMapComponent";
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import rentInfo from "../data/home-rent.json"
import "../styles/rent.css";
import { FaDollarSign } from 'react-icons/fa';
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
            <RentZip/>
        </>);
    } else {
        return (<>
        {/* <button onClick={()=>{
            <p>111</p>
            
           
        }}>sort by price</button> */}
            <RentNoZipSort/>
        </>);
    }

}



const RentZip=()=>{
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i = localStorage.getItem('LogInAccount');
    const navigate = useNavigate();
    const params = useLocation();
    const zipcode = params.state;
    return(<div>

                <div style={{ float: "left" }}>
            <UserContext.Provider value={zipcode}>
                    <MyMapComponent isMarkerShown  />
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
                            <p>{rentIF.Detail.price}</p>
                            {/* <nav>
                            <Link to="/HomeInfo"></Link>
                        </nav>
                        <Outlet /> */}
                            <button id="bt2" onClick={() => {
                                // alert("please log in at first");
                                // navigate("../LogOrSign/LogIn");
                                if (i != null) {
                                    if (myArray[i].likelist.indexOf(rentIF.Detail.Id) != -1) {
                                        alert("this house is already on your list ")
                                    } else {
                                        var arr = (myArray[i].likelist).split("");
                                        arr.push(rentIF.Detail.Id);
                                        myArray[i].likelist = arr.join("");
                                        localStorage.setItem("accountData", JSON.stringify(myArray));
                                        alert(myArray[i].likelist);
                                        // document.getElementById("bt2").innerText="liked";
                                    }
                                } else {
                                    alert("please log in at first");
                                    navigate("../LogOrSign/NewAccount");
                                }

                            }}>Like!</button>
                            <button onClick={() => {

                                navigate("/HomeInfo", {
                                    state: rentIF.Detail.Id
                                });
                            }}>rent</button>

                        </div>
                    })
                }

            </div>);
}



const RentNoZipSort=()=>{
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i = localStorage.getItem('LogInAccount');
    const navigate = useNavigate();
    const params = useLocation();
    const zipcode = params.state;
    return( <div>

                <div style={{ float: "left" }}>
            <UserContext.Provider value={zipcode}>

                    <MyMapComponent isMarkerShown className="map" />
            </UserContext.Provider>  
                </div>

                {/* <button className="bt2" onClick={()=>{
                    document.getElementsByClassName("bt2").innerHTML="111";
                }}>change color</button> */}

                {
                    rentInfo.rentInfo.sort((a,b)=>{
                        return(a.Detail.price)-(b.Detail.price);
                    })
                    
                    
                    .map(rentIF => {

                        console.log(rentIF.Detail.Id)
                        return <div className="dr" style={{ float: "left" }} key={rentIF.Detail.Id}>
                            <img src={rentIF.Detail.img} alt="zanwu" style={{ width: "345px", height: "200px" }} />
                            <h2>{rentIF.Detail.Name}</h2>
                            <p><FaDollarSign/>{rentIF.Detail.price}</p>
                            {/* <nav>
                            <Link to="/HomeInfo"></Link>
                        </nav>
                        <Outlet /> */}
                            {/* <p>{myArray[i].firstName}</p> */}
                            <button className="bt2" onClick={() => {
                                if (i != null) {
                                    if (myArray[i].likelist.indexOf(rentIF.Detail.Id) != -1) {
                                        alert("this house is already on your list ")
                                    } else {
                                        var arr = (myArray[i].likelist).split("");
                                        arr.push(rentIF.Detail.Id);
                                        myArray[i].likelist = arr.join("");
                                        localStorage.setItem("accountData", JSON.stringify(myArray));
                                        document.getElementsByClassName("bt2").innerText="saved";
                                        alert(myArray[i].likelist)
                                    }
                                } else {
                                    alert("please log in at first");
                                    navigate("../LogOrSign/NewAccount");
                                }


                            }}>Like!</button>
                            <button onClick={() => {
                                console.log(rentIF.Detail.ID)
                                navigate("/HomeInfo", {
                                    state: rentIF.Detail.Id
                                });
                            }}>rent</button>
                            

                        </div>
                    })
                }

            </div>);
   
}



export default Rent;