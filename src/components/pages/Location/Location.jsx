import React from "react";
import PostcodeForm from "../../PostcodeForm/PostcodeForm.jsx";
import LondonMap from "../../LondonMap/LondonMap.jsx";
import { useHistory } from "react-router-dom";
import * as SC from "./Location.styles.jsx";

export default function Location() {
  const [userLocation, setUserLocation] = React.useState("");
  const history = useHistory();
  return (
    <SC.Div>
      <LondonMap
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />
      <SC.InstructionArticle className={userLocation ? "hidden" : "visible"}>
        <p>
          For ethical waste dispose in your area. Select your borough on the map
          or Insert a postcode.
        </p>
      </SC.InstructionArticle>
      <SC.LocationButton
        className={!userLocation ? "hidden" : "visible"}
        onClick={() => {
          history.push(
            "/categories/" + userLocation.toLowerCase().split(" ").join("")
          );
        }}
      >
        <h2>Select {userLocation}</h2>
      </SC.LocationButton>
      <PostcodeForm />
    </SC.Div>
  );
}
