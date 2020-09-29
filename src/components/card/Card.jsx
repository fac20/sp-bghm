import React from "react";

function Card({ material, wasteOrganisation }) {
  return (
    <article className="card">
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
    </article>
  );
}

export default Card;
