import React from "react";
import Card from "../card/Card.jsx";
import styled from "styled-components";

const Frame = styled.section`
  background-color: hsl(159, 56%, 7%);
  display: grid;
  width: 100%;
`;

function RecyclingCategories() {
  return (
    <>
      <h1>What type of recycling do you have?</h1>
      <Frame>
        <Card material="plastic" wasteOrganisation="" />
        <Card material="paper and card" wasteOrganisation="" />
        <Card material="metal" wasteOrganisation="" />
        <Card material="glass" wasteOrganisation="" />
        <Card material="garden waste" wasteOrganisation="" />
        <Card material="small electronics" wasteOrganisation="" />
        <Card material="batteries" wasteOrganisation="" />
        <Card material="other waste" wasteOrganisation="" />
      </Frame>
      <button>
        Contact your local authority for other waste services and requests
      </button>
    </>
  );
}

export default RecyclingCategories;
