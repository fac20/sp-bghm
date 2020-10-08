import React from "react";
import blueBin from "../../assets/wheelie-bin-blue.svg";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as SC from "./Card.styles.jsx";
import haringeyInfo from "../../data/haringey.json";

function Card({ material, src }) {
  let history = useHistory();
  const location = useLocation();
  function handleClick() {
    history.push(location.pathname + "/" + material);
  }
  const { borough } = useParams();
  // Assign a wast type depending on the material
  const wasteType =
    material === /plastic|paper and card|metal|glass/
      ? "Recycling"
      : material === "food waste"
      ? "Food waste recycling"
      : "Rubbish";

  let binInfoArry = haringeyInfo.filter((obj) => obj[wasteType]);
  binInfoArry = binInfoArry.map((obj) => obj[wasteType]);
  const bin = binInfoArry.join(" or <br>");
  // haringeyInfo[]

  // garden waste
  // organic waste
  // small electronics
  // batteries
  // other waste
  return (
    <SC.Container tabIndex="0">
      <SC.Front>
        <SC.Title>
          <h2>{material}</h2>
        </SC.Title>
        <SC.CategoryIcon src={src} alt={material} />
      </SC.Front>
      <SC.Back>
        <SC.BackTitle dangerouslySetInnerHTML={{ __html: bin }} />
        <SC.CategoryBinImage src={blueBin} alt="bin-type" />
        <SC.Button onClick={handleClick}>Click to read more</SC.Button>
      </SC.Back>
    </SC.Container>
  );
}

export default Card;
