import React ,{useState}from "react";
import {GoogleMap,Marker,InfoWindow} from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import  parksData from "../data/skaeboard-parks.json";
function Map(){
    const [selectedPark,setSelectedPark]=useState();
    return( <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat:45.421532,lng:-75.697189}}>

{ parksData.features.map(park=>(
    <Marker key={park.properties.PARK_ID} 
    position={{
        lat:park.geometry.coordinates[1],
        lng:park.geometry.coordinates[0]
    }}
    onClick={()=>{
        setSelectedPark(park);
    }}
    // icon={{
    //     url:''
    // }}
    />
))}
{selectedPark &&(
    <InfoWindow position={{
        lat:selectedPark.geometry.coordinates[1],
        lng:selectedPark.geometry.coordinates[0]
    }}
        onCloseClick={()=>{
            setSelectedPark(null)
        }}
    >
      <div>
        <h2>{selectedPark.properties.NAME}</h2>
        <p>{selectedPark.properties.DESCRIPTIO}</p>    
    </div></InfoWindow>
)}
</GoogleMap>
);
}
const WrappedMap=withScriptjs(withGoogleMap(Map))
export default function App(){
    return(<div style={{width:"50vw",height:"100vh"}}>
    <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBGqJuYmX0PdinZbG2OPGYxkan80viUYW0'}
        loadingElement={<div style={{height:"100%"}}/>}
        containerElement={<div style={{height:"100%"}}/>}
        mapElement={<div style={{height:"100%"}}/>}
    /></div>);
}