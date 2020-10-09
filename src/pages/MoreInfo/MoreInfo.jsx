import React from "react";
import { useParams } from "react-router-dom";

import content from "./MoreInfo.database.jsx";
import * as SC from "./MoreInfo.styles";

export default function MoreInfo() {
  const params = useParams();
  const material = params.material;
  const location = params.borough;

  return (
    <>
      <SC.Section>
        <SC.Title id="what">What's recyclable?</SC.Title>
        <SC.Article>
          {content ? content?.[material]?.[location]?.what_material : "no info"}
        </SC.Article>
      </SC.Section>
      <SC.Section>
        <SC.Title id="where">
          Where can I recycle {material} in {location}?
        </SC.Title>
        <SC.Article>
          {content
            ? content?.[material]?.[location]?.how_to_recycle
            : "no info"}
        </SC.Article>
      </SC.Section>
      <SC.Section>
        <SC.Title id="then">What happens to my recycled {material}?</SC.Title>
        <SC.Article>
          {content ? content?.[material]?.what_happens : "no info"}
        </SC.Article>
      </SC.Section>
      <SC.Section>
        <SC.Title id="impact">The impact of recycling our {material} </SC.Title>
        <SC.Article>
          {content ? content?.[material]?.impact : "no info"}
        </SC.Article>
      </SC.Section>
    </>
  );
}
