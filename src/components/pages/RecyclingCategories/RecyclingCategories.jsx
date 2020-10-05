import React from "react";
import Card from "../../Card/Card.jsx";

import batteries from "../../../assets/batteries.svg";
import gardenWaste from "../../../assets/garden-waste.svg";
import glass from "../../../assets/glass.svg";
import plastic from "../../../assets/plastic.svg";
import metal from "../../../assets/metal.svg";
import otherWaste from "../../../assets/other-waste.svg";
import paperAndCard from "../../../assets/paper-and-card.svg";
import smallElectronics from "../../../assets/small-electronics.svg";
import * as SC from "./RecyclingCategories.styles.jsx";

function RecyclingCategories() {
  return (
    <SC.Div>
      <SC.Span>
        <h1>What type of recycling do you have?</h1>
      </SC.Span>
      <SC.Section>
        <Card material="plastic" wasteOrganisation="" src={plastic} />
        <Card
          material="paper and card"
          wasteOrganisation=""
          src={paperAndCard}
        />
        <Card material="metal" wasteOrganisation="" src={metal} />
        <Card material="glass" wasteOrganisation="" src={glass} />
        <Card material="garden waste" wasteOrganisation="" src={gardenWaste} />
        <Card
          material="small electronics"
          wasteOrganisation=""
          src={smallElectronics}
        />
        <Card material="batteries" wasteOrganisation="" src={batteries} />
        <Card material="other waste" wasteOrganisation="" src={otherWaste} />
      </SC.Section>
      <SC.Button>
        Contact your local authority for other waste services and requests
      </SC.Button>
    </SC.Div>
  );
}

export default RecyclingCategories;
