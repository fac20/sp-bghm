import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  background-color: blue;
  /* height: 4rem;
  width: 2rem; */
`;

function Card({ material, wasteOrganisation }) {
  return (
    <CardContainer>
      <div className="card__front">
        <h3>{material}</h3>
        <img src="" alt={material} />
      </div>
      <div class="card__back">
        <h3>
          {material} goes in {wasteOrganisation}
        </h3>
        <img src="" alt="bin-type" />
        <button>press for more information</button>
      </div>
    </CardContainer>
  );
}

export default Card;
