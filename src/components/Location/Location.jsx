import React from "react";
import Form from "./Form.jsx";
import Map from "./Map.jsx";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
            history.push(
              "/categories/" + userLocation.toLowerCase().split(" ").join("")
            );
          }}
        >
          <h2>Select {userLocation}</h2>
        </button>
      </LocationCheck>
      <Map userLocation={userLocation} setUserLocation={setUserLocation} />
   
    </>
  );
}
