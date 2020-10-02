import React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom"
const Title = styled.h1`

`
const Section = styled.section`
`

// if material = plastic then content = content.plastic.{location}

export default function MoreInfo() {
    const locationUrl = useLocation();
    const material = locationUrl.pathname.split("/")[3]
    console.log("material", material)
    // Temporary api/database
    const content = {
        "plastic":{
            "impact": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
            "what_happens": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
            "haringey":{
                "recyclable_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
                "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."},
            "islington":{
                "recyclable_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
               "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."},
            "redbridge":{
                "what_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
               "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            }
        },
        "metal":{
            "impact": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
            "what_happens": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
            "Haringey":{
                "recyclable_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
               "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            },
            "Islington":{
                "recyclable_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
                "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            },
            "Redbridge":{
                "what_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
                "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            }
        },
        "glass":{
            "impact": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
            "what_happens": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
            "haringey":{
                "recyclable_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
                "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            },
            "islington":{
                "recyclable_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
                "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            },
            "redbridge":{
                "what_material": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem.",
               "how_to_recycle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus officia rerum praesentium accusantium obcaecati voluptas saepe? Alias natus, quibusdam ea repudiandae laudantium voluptas aut itaque minima! Iusto, fuga dolorem."
            }
        }
    }

    const location = window.localStorage.getItem("location") || "Haringey"

    return ( 
        <>
    <div>
        <Title>What {material} is recyclable? </Title>
        <Section> 
        {content[{material}][{location}]["recyclable_material"]}
        </Section>
    </div>
    <div>
    <Title>Where can I recycle {material} in {location}?</Title>
        <Section>
        </Section>
    </div>
    <div>
        <Title>What happens to my recycled {material}?</Title>  
        <Section>
        </Section>
    </div>
    <div>
        <Title>The impact of recycling our {material} </Title>  
        <Section>
        </Section>
    </div>
  </>
  )
}

// Title
// what material is recyclable? 
// where can it be recycled
// what happens to it when we recycle it?
// the impact of recycling our plastic 