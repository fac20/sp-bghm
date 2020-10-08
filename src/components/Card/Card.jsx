import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as SC from "./Card.styles.jsx";
import { allRecyclingImports } from "./allRecyclingInfoImports.js";

function Card({ material, src }) {
  let history = useHistory();
  const location = useLocation();
  function handleClick() {
    history.push(location.pathname + "/" + material);
  }
  const { borough } = useParams();
  const boroughInfo = allRecyclingImports[borough];

  var wasteType = "";
  switch (material) {
    case "food waste":
      wasteType = "Food waste recycling";
      break;
    case "plastic":
      wasteType = "Recycling";
      break;
    case "metal":
      wasteType = "Recycling";
      break;
    case "paper and card":
      wasteType = "Recycling";
      break;
    case "glass":
      wasteType = "Recycling";
      break;
    default:
      wasteType = "Rubbish";
  }
  console.log(wasteType);
  let binInfoArray = boroughInfo.filter((obj) => obj[wasteType]);
  console.log(binInfoArray);
  binInfoArray = binInfoArray.map((obj) => obj[wasteType]);
  const bin = binInfoArray.join("<br> or <br>");
  console.log(bin);

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
          <SC.BackText dangerouslySetInnerHTML={{ __html: bin }} />
          <SC.Button onClick={handleClick}>Click to read more</SC.Button>
        </SC.Back>
      </SC.Container>
    </SC.OuterContainer>
  );
}

export default Card;
