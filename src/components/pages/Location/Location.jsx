import React from "react";
import PostcodeForm from "../../PostcodeForm/PostcodeForm.jsx";
import LondonMap from "../../LondonMap/LondonMap.jsx";
import { useHistory } from "react-router-dom";
import * as SC from "./Location.styles.jsx";

export default function Location() {
  const [userLocation, setUserLocation] = React.useState("");
  const history = useHistory();
  return (
    <>
      <PostcodeForm />
      <SC.LocationCheck className={!userLocation ? "hidden" : "visible"}>
        <button
          onClick={() => {
            history.push(
              "/categories/" + userLocation.toLowerCase().split(" ").join("")
            );
          }}
        >
          <h2>Select {userLocation}</h2>
        </button>
      </SC.LocationCheck>
      <SC.Div>
        <LondonMap
          userLocation={userLocation}
          setUserLocation={setUserLocation}
        />
      </SC.Div>
    </>
  );
}
