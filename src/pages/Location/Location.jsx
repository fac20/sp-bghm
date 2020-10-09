import React from "react";
import PostcodeForm from "../../components/PostcodeForm/PostcodeForm.jsx";
import LondonMap from "../../components/LondonMap/LondonMap.jsx";
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
      <SC.LocationCheck hidden={userLocation}>
        <SC.InstructionArticle>
          <p>
            For ethical waste disposal in your area. Select your borough on the
            map or insert a postcode below.
          </p>
        </SC.InstructionArticle>
      </SC.LocationCheck>
      <SC.LocationCheck hidden={!userLocation}>
        <SC.LocationButton
          onClick={() => {
            history.push(
              "/categories/" + userLocation.toLowerCase().split(" ").join("")
            );
          }}
        >
          <h2>Select {userLocation}</h2>
        </SC.LocationButton>
      </SC.LocationCheck>
      <PostcodeForm />
    </SC.Div>
  );
}
