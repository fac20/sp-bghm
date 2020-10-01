import React from "react";
import Card from "../Card/Card.jsx";
import styled from "styled-components";
import plastic from "../assets/plastic.svg";

const Div = styled.div`
  background-color: hsl(129, 53%, 90%);
  color: hsl(hsl(159, 56%, 7%));
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-gap: 1rem 1rem;
  width: 100%;
`;

function RecyclingCategories() {
  return (
    <Div>
      <h1>What type of recycling do you have?</h1>
      <Section>
        <Card material="plastic" wasteOrganisation="" src={plastic} />
        <Card material="paper and card" wasteOrganisation="" />
        <Card material="metal" wasteOrganisation="" />
        <Card material="glass" wasteOrganisation="" />
        <Card material="garden waste" wasteOrganisation="" />
        <Card material="small electronics" wasteOrganisation="" />
        <Card material="batteries" wasteOrganisation="" />
        <Card material="other waste" wasteOrganisation="" />
      </Section>
      <button>
        Contact your local authority for other waste services and requests
      </button>
    </Div>
  );
}

export default RecyclingCategories;
