import React, { createContext } from "react";
import MyMapComponent from "./MyMapComponent";
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import rentInfo from "../data/home-rent.json"
import "../styles/rent.css";
export const UserContext = createContext();
const Rent = () => {
    
    
    const navigate = useNavigate();
    const params = useLocation();
    const zipcode=params.state;
    //    useEffect(()=>{

    //    })
    if(zipcode!=null){
return (<>
        <div>
            
                {/* <div style={{ float: "left" }}>
            <UserContext.Provider value={zipcode}>
                    <MyMapComponent isMarkerShown  />
            </UserContext.Provider>  
                </div> */}

            

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
                        <button onClick={() => {
                            console.log(rentIF.Detail.ID)
                            navigate("/HomeInfo", {
                                state: rentIF.Detail.Id
                            });
                        }}>rent</button>

                    </div>
                })
            }

        </div>
    </>);
    }else{
        return (<>
        <div>
            
                {/* <div style={{ float: "left" }}>
            <UserContext.Provider value={zipcode}>
                    <MyMapComponent isMarkerShown  />
            </UserContext.Provider>  
                </div> */}

            

            {
                rentInfo.rentInfo.map(rentIF => {

                    console.log(rentIF.Detail.Id)
                    return <div className="dr" style={{ float: "left" }} key={rentIF.Detail.Id}>
                        <img src={rentIF.Detail.img} alt="zanwu" style={{ width: "345px", height: "200px" }} />
                        <h2>{rentIF.Detail.Name}</h2>
                        <p>{rentIF.Detail.price}</p>
                        {/* <nav>
                            <Link to="/HomeInfo"></Link>
                        </nav>
                        <Outlet /> */}
                        <button onClick={() => {
                            console.log(rentIF.Detail.ID)
                            navigate("/HomeInfo", {
                                state: rentIF.Detail.Id
                            });
                        }}>rent</button>

                    </div>
                })
            }

        </div>
    </>);
    }
    
}

export default Rent;