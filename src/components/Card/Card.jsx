import React from "react";
import blueBin from "../../assets/wheelie-bin-blue.svg";
import { useHistory, useLocation } from "react-router-dom";
import * as SC from "./Card.styles.jsx";

function Card({ material, wasteOrganisation, src }) {
  let history = useHistory();
  const location = useLocation();
  function handleClick() {
    history.push(location.pathname + "/" + material);
  }

  return (
    <SC.OuterContainer>
      <SC.Container tabIndex="0">
        <SC.Front>
          <SC.Title>
            <h2>{material}</h2>
          </SC.Title>
          <SC.CategoryIcon src={src} alt={material} />
        </SC.Front>
        <SC.Back>
          <SC.BackTitle>
            Put {material} in {wasteOrganisation}
          </SC.BackTitle>
          <SC.CategoryBinImage src={blueBin} alt="bin-type" />
          <SC.Button onClick={handleClick}>Click to read more</SC.Button>
        </SC.Back>
      </SC.Container>
    </SC.OuterContainer>
  );
}

export default Card;
