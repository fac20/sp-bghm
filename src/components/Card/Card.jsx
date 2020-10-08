import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as SC from "./Card.styles.jsx";
import { allRecyclingImports } from "./allRecyclingInfoImports.js";

function Card({ material, src }) {
  // console.log(boroughInfo)
  let history = useHistory();
  const location = useLocation();
  function handleClick() {
    history.push(location.pathname + "/" + material);
  }
  const { borough } = useParams();
  const boroughInfo = allRecyclingImports[borough];

  // Assign a wast type depending on the material
  // let wasteType;
  // switch (material) {
  //   case "plastic" || "paper and card" || "metal" || "glass":
  //     wasteType = "Recycling";
  //     break;
  //   case "food waste":
  //     wasteType = "Food Waste recycling";
  //     break;
  //   default:
  //     wasteType = "Rubbish";
  // }

  // if material === "plastic" {
  //   wasteType = "Recycling"
  // } else if
  const wasteType =
    material === "food waste"
      ? "Food waste recycling"
      : material === /plastic|paper and card|metal|glass/
      ? "Recycling"
      : "Rubbish";
  console.log(wasteType);

  let binInfoArray = boroughInfo.filter((obj) => obj[wasteType]);
  binInfoArray = binInfoArray.map((obj) => obj[wasteType]);
  const bin = binInfoArray.join("<br> or <br>");
  // boroughInfo[]

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
        <SC.BackText dangerouslySetInnerHTML={{ __html: bin }} />
        <SC.Button onClick={handleClick}>Click to read more</SC.Button>
      </SC.Back>
    </SC.Container>
  );
}

export default Card;

// function caseInSwitch(val) {
//   var answer = "";
//   switch (/plastic|paper and card|metal|glass/) {
//     case 1:
//       return "Recycling";
//       break;
//     case 2:
//       return "";
//       break;
//     case 3:
//       return "gamma";
//       break;
//   }
//   return answer;
// }
