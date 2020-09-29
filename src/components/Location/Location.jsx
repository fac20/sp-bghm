import React from "react";

import LondonMap from "../assets/LondonMap";

//  Create react component - svg map 
// find a way to make boroughs clickable


function Map() {
    return <img src={LondonMap} alt="map of London boroughs"/>
}
 export default  function Location(){
      return (
          <Map/>

      )
 }