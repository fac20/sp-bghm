import React from "react";
import Card from "card.jsx";

function RecyclingCategories() {
  return (
    <>
      <h1>What type of recycling do you have?</h1>
      <section>
        <Card material="plastic" />
        <Card material="paper and card" />
        <Card material="metal" />
        <Card material="glass" />
        <Card material="garden waste" />
        <Card material="small electronics" />
        <Card material="batteries" />
        <Card material="other waste" />
      </section>
      <button>
        Contact your local authority for other waste services and requests
      </button>
    </>
  );
}

export default RecyclingCategories;
