import React, { Component } from "react";
import Form from "./Form.jsx";
import Map from "./Map.jsx";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
//  Create react component - svg map
// find a way to make boroughs clickable

const LocationCheck = styled.span`
  margin: auto;
`;


export default function Location() {
  const [userLocation, setUserLocation] = React.useState("");
  const history = useHistory();
  return (
    <>
      <Form />
      <LocationCheck className={!userLocation ? "hidden" : "visible"}>
        <button
          onClick={() => {
            history.push("/categories/" + userLocation.toLocaleLowerCase());
          }}
        >
          <h2>Select {userLocation}</h2>
        </button>
      </LocationCheck>
      <Map userLocation={userLocation} setUserLocation={setUserLocation} />
   
    </>
  );
}
