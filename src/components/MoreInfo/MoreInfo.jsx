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
    const content = {
        "Plastic":{
            "impact": "",
            "what_happens": "",
            "Haringey":{
                "recyclable_material": "",
                "how_to_recycle": ""},
            "Islington":{
                "recyclable_material": "",
               "how_to_recycle": ""},
            "Redbridge":{
                "what_material": "",
               "how_to_recycle": ""
            }
        },
        "Metal":{
            "impact": "",
            "what_happens": "",
            "Haringey":{
                "recyclable_material": "",
               "how_to_recycle": ""
            },
            "Islington":{
                "recyclable_material": "",
                "how_to_recycle": ""
            },
            "Redbridge":{
                "what_material": "",
                "how_to_recycle": ""
            }
        },
        "Glass":{
            "impact": "",
            "what_happens": "",
            "Haringey":{
                "recyclable_material": "",
                "how_to_recycle": ""
            },
            "Islington":{
                "recyclable_material": "",
                "how_to_recycle": ""
            },
            "Redbridge":{
                "what_material": "",
               "how_to_recycle": ""
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