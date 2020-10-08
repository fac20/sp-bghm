import React, { useState } from "react";
import useAirtable from "../../../hooks/useAirtable";
import Card from "../../Card/Card.jsx";

import batteries from "../../../assets/batteries.svg";
import gardenWaste from "../../../assets/garden-waste.svg";
import glass from "../../../assets/glass.svg";
import metal from "../../../assets/metal.svg";
import foodWaste from " ./../../src/assets/food-waste.svg";
import otherWaste from "../../../assets/other-waste.svg";
import paperAndCard from "../../../assets/paper-and-card.svg";
import plastic from "../../../assets/plastic.svg";
import smallElectronics from "../../../assets/small-electronics.svg";

import * as SC from "./RecyclingCategories.styles.jsx";

function RecyclingCategories() {
  const borough = window.localStorage.getItem("location");

  const [linkToLocalAuthority, setLinkToLocalAuthority] = useState("");

  useAirtable({ borough, linkToLocalAuthority, setLinkToLocalAuthority });

  const openPage = (event) => {
    event.preventDefault();
    console.log("link", linkToLocalAuthority);
    window.open(linkToLocalAuthority, "_blank");
  };

  return (
    <SC.Div>
      <SC.Span>
        <h1>Hello, {borough}! What do you want to recycle?</h1>
      </SC.Span>
      <SC.Section>
        <Card material="plastic" src={plastic} />
        <Card material="paper and card" src={paperAndCard} />
        <Card material="metal" src={metal} />
        <Card material="glass" src={glass} />
        <Card material="garden waste" src={gardenWaste} />
        <Card material="food waste" src={foodWaste} />
        <Card material="small electronics" src={smallElectronics} />
        <Card material="batteries" src={batteries} />
        <Card material="other waste" src={otherWaste} />
      </SC.Section>
      <SC.Button onClick={openPage}>
        Contact your local authority for other waste services and requests
      </SC.Button>
    </SC.Div>
  );
}

export default RecyclingCategories;
/*
<a href="www.ealing.gov.uk">
Contact your local authority for other waste services and requests
</a>

takes us to localhost:3000/categories/www.ealing.gov.uk
*/
