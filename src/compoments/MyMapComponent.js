import React, { useContext, useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import parksData from "../data/skaeboard-parks.json";
import rentInfo from "../data/home-rent.json"
import "../styles/rent.css";
// import "../styles/Detail.css";

import { UserContext } from './Rent'
import { UserContextID } from "./HomeInfo";
function Map() {
    const datazip = useContext(UserContext);
    const dataID=useContext(UserContextID);
    console.log(dataID);
    const [selectedPark, setSelectedPark] = useState();
    if (datazip != null) {
        return (<GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 42.360081, lng: -71.058884 }}>

            {rentInfo.rentInfo.filter((rentIF) => {
                if (rentIF.Detail.ZIP == datazip) {
                    return rentIF;
                }
            }).map(rentIF => (
                <Marker key={rentIF.Detail.Id}
                    position={{
                        lat: rentIF.Detail.coordinates[0],
                        lng: rentIF.Detail.coordinates[1]
                    }}
                    onClick={() => {
                        setSelectedPark(rentIF);
                    }}
                // icon={{
                //     url:''
                // }}
                />
            ))}
            {selectedPark && (
                <InfoWindow position={{
                    lat: selectedPark.Detail.coordinates[0],
                    lng: selectedPark.Detail.coordinates[1]
                }}
                    onCloseClick={() => {
                        setSelectedPark(null)
                    }}
                >
                    <div>
                        <h2>{selectedPark.Detail.Name}</h2>
                        <p>{selectedPark.Detail.Owner}</p>
                    </div></InfoWindow>
            )}
        </GoogleMap>
        );
    } else if(dataID!=null){
        return(<GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 42.360081, lng: -71.058884 }}>

            {rentInfo.rentInfo.filter((rentIF) => {
                if (rentIF.Detail.Id == dataID) {
                    return rentIF;
                }
            }).map(rentIF => (
                <Marker key={rentIF.Detail.Id}
                    position={{
                        lat: rentIF.Detail.coordinates[0],
                        lng: rentIF.Detail.coordinates[1]
                    }}
                    onClick={() => {
                        setSelectedPark(rentIF);
                    }}
                // icon={{
                //     url:''
                // }}
                />
            ))}
            {selectedPark && (
                <InfoWindow position={{
                    lat: selectedPark.Detail.coordinates[0],
                    lng: selectedPark.Detail.coordinates[1]
                }}
                    onCloseClick={() => {
                        setSelectedPark(null)
                    }}
                >
                    <div>
                        <h2>{selectedPark.Detail.Name}</h2>
                        <p>{selectedPark.Detail.Owner}</p>
                    </div></InfoWindow>
            )}
        </GoogleMap>);
    }else {
        return (<GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 42.360081, lng: -71.058884 }}>

            {rentInfo.rentInfo.map(rentIF => (
                <Marker key={rentIF.Detail.Id}
                    position={{
                        lat: rentIF.Detail.coordinates[0],
                        lng: rentIF.Detail.coordinates[1]
                    }}
                    onClick={() => {
                        setSelectedPark(rentIF);
                    }}
                // icon={{
                //     url:''
                // }}
                />
            ))}
            {selectedPark && (
                <InfoWindow position={{
                    lat: selectedPark.Detail.coordinates[0],
                    lng: selectedPark.Detail.coordinates[1]
                }}
                    onCloseClick={() => {
                        setSelectedPark(null)
                    }}
                >
                    <div>
                        <h2>{selectedPark.Detail.Name}</h2>
                        <p>{selectedPark.Detail.Owner}</p>
                    </div></InfoWindow>
            )}
        </GoogleMap>
        );
    }
    

}
const WrappedMap = withScriptjs(withGoogleMap(Map))
export default function App() {
    return (<div className="mapdiv">
        <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBGqJuYmX0PdinZbG2OPGYxkan80viUYW0'}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
        /></div>);
}