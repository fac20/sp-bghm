import React from "react";
import Card from "./card.jsx";

function RecyclingCategories() {
  return (
    <>
      <h1>What type of recycling do you have?</h1>
      <section>
        <Card material="plastic" wasteOrganisation="" />
        <Card material="paper and card" wasteOrganisation="" />
        <Card material="metal" wasteOrganisation="" />
        <Card material="glass" wasteOrganisation="" />
        <Card material="garden waste" wasteOrganisation="" />
        <Card material="small electronics" wasteOrganisation="" />
        <Card material="batteries" wasteOrganisation="" />
        <Card material="other waste" wasteOrganisation="" />
      </section>
      <button>
        Contact your local authority for other waste services and requests
      </button>
    </>
  );
}

export default RecyclingCategories;
