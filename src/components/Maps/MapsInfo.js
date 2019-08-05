import React from 'react'
import {GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { Grid } from '@material-ui/core'

//you can use .env for define google API key
const YOUR_GOOGLE_API_KEY_GOES_HERE = "AIzaSyCmm9cxu6clcx9orX1Xcqf6KywFInhapws"

const MapContainer = (props) =>  { 
  return(
        <Map
        google={props.google}
        zoom={8}
        style={map_style.Map}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      >
        <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
  )}

 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCmm9cxu6clcx9orX1Xcqf6KywFInhapws"
})(MapContainer)

const map_style = {
  Map: {
    width: "1570px", 
    height: "500px",
    position: "relative"
  }
}