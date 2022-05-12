import React from "react";
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import rentInfo from "../data/home-rent.json"
const Buy=()=>{
    const navigate = useNavigate();
    const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');
    var i=localStorage.getItem('LogInAccount');
    
        return(<>
        <div>
 <br/>
 <br/>
  <button onClick={()=>navigate(-1)}>go back</button>
  </div>
        <div>
            {
                rentInfo.rentInfo.filter((rentIF) => {
                    if ((myArray[i].likelist).indexOf(rentIF.Detail.Id)!=-1) {
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
                        <button onClick={()=>{
                          myArray[i].likelist  =(myArray[i].likelist).replace(rentIF.Detail.Id,"");
                            localStorage.setItem("accountData", JSON.stringify(myArray));
                            console.log(myArray[i].likelist);
                            alert("removed successfully");
                            window.location.reload();
                        }}> cancelLike!</button>
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

export default Buy;