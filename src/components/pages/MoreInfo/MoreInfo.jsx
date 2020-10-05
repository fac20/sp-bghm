import React from "react";
import { useLocation } from "react-router-dom";

import * as SC from "./MoreInfo.styles";

export default function MoreInfo() {
  const locationUrl = useLocation();
  const material = locationUrl.pathname.split("/")[3];
  console.log("material", material);
  // Temporary api/database
  const content = {
    plastic: {
      impact:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      what_happens:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      haringey: {
        recyclable_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
      islington: {
        recyclable_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
      redbridge: {
        what_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
    },
    metal: {
      impact:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      what_happens:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      Haringey: {
        recyclable_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
      Islington: {
        recyclable_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
      Redbridge: {
        what_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
    },
    glass: {
      impact:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      what_happens:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      haringey: {
        recyclable_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
      islington: {
        recyclable_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
      redbridge: {
        what_material:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
        how_to_recycle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
      },
    },
  };

  const location = window.localStorage.getItem("location") || "haringey";
  console.log(location);
  console.log(content.plastic[location]["what_material"]);
  return (
    <>
      <SC.Section>
        <SC.Title>What is recyclable? </SC.Title>
        <SC.Article>
          {content ? content[material][location].what_material : "no info"}
        </SC.Article>
      </SC.Section>
      <SC.Section>
        <SC.Title>
          Where can I recycle {material} in {location}?
        </SC.Title>
        <SC.Article>
          {content ? content[material][location].how_to_recycle : "no info"}
        </SC.Article>
      </SC.Section>
      <SC.Section>
        <SC.Title>What happens to my recycled {material}?</SC.Title>
        <SC.Article>
          {content ? content[material].what_happens : "no info"}
        </SC.Article>
      </SC.Section>
      <SC.Section>
        <SC.Title>The impact of recycling our {material} </SC.Title>
        <SC.Article>
          {content ? content[material].impact : "no info"}
        </SC.Article>
      </SC.Section>
    </>
  );
}
