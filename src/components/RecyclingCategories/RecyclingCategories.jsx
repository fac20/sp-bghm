import React from "react";
import Card from "../Card/Card.jsx";
import styled from "styled-components";

import batteries from "../assets/batteries.svg";
import gardenWaste from "../assets/garden-waste.svg";
import glass from "../assets/glass.svg";
import plastic from "../assets/plastic.svg";
import metal from "../assets/metal.svg";
import otherWaste from "../assets/other-waste.svg";
import paperAndCard from "../assets/paper-and-card.svg";
import smallElectronics from "../assets/small-electronics.svg";

const Div = styled.div`
  background-color: var(--main-green);
  color: var(--main-green);
  text-align: center;
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-gap: 1rem 1rem;
  padding: 2rem;
  width: 100%;
`;

const Span = styled.span`
margin: 2rem;
  text-align: center;
`;

const Button = styled.button`
margin: auto;
  background-color: var(--main-orange);
  border: 1px;
  color: var(--background-dark-blue);
  font: inherit;
  font-weight: bold;
  line-height: 1;
  padding: 1rem;

`;

function RecyclingCategories() {
  return (
    <Div>
      <Span>
        <h1>What type of recycling do you have?</h1>
      </Span>
      <Section>
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
      </Section>
      <Button>
        Contact your local authority for other waste services and requests
      </Button>
    </Div>
  );
}

export default RecyclingCategories;
