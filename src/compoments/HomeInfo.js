import React from "react";
import rentInfo from "../data/home-rent.json"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { createContext,useState ,useCallback} from "react";
import MyMapComponent from "./MyMapComponent";
import { FaBed,FaDollarSign,FaBath } from 'react-icons/fa';

import "../styles/Detail.css"
import {
    useLocation
  } from "react-router-dom";
 export const UserContextID = createContext(); 
const HomeInfo=()=>{
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    const params = useLocation();
    console.log(params.state)
    let i=params.state;//id
    return(<div className="HomeD">
     <h1 style={{fontStyle:"italic",height:"50px",backgroundColor:"brown"}}> More Details</h1>
    <div className="HomeDetails">
   
      <img src={rentInfo.rentInfo[i-1].Detail.img} alt=""/>
      <h1>Facts and features</h1>
    <h3>{rentInfo.rentInfo[i-1].Detail.Name}</h3>
    <h3><FaDollarSign/> Est. payment: ${rentInfo.rentInfo[i-1].Detail.price}/mo</h3>
    <h3><FaBath/>ZIP code: {rentInfo.rentInfo[i-1].Detail.ZIP}</h3>
    <h3>Builte in: {rentInfo.rentInfo[i-1].Detail["Build time"]}</h3>
    <FaBed/><h2>Interested in touring this home?</h2>
    {/* <button className="btnapply">Contact Agent</button> */}
    <div>

   
    <CopyToClipboard text="617-372-4389">
    <button className="btnapply" onClick={handleToggle}>Contact Agent</button>
</CopyToClipboard>
<span className={isActive?"spanN":"spanH"}>Coped</span>
 </div>
 <br/>
<div className="dmap2" >
<UserContextID.Provider value={params.state}>
                <MyMapComponent isMarkerShown className=""></MyMapComponent>
                </UserContextID.Provider>
        </div>
    </div>
    <div className="gallery">
      {/* <Gallery photos={photos[Math.floor(Math.random()*photos.length)]} />; */}
      <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
    </div>
    
    {/* <button onClick={()=>{rentInfo.rentInfo[i-1].Detail.Name="bai"}}></button> */}
    
    </div>
            );
}

export default HomeInfo;