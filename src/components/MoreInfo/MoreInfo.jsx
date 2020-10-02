import React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom"

const Title = styled.h3`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px; //to space out the underline
  position: relative;
    &:hover { color: rgba(253,187,45,1)  } 
  &:after{    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 0.3rem;
  left: 50%; //makes the undline stop at the middle after hover
  position: absolute;
  background: linear-gradient(0deg, rgba(148,232,183,1) 0%, rgba(253,187,45,1) 100%);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
  }
  &:hover:after{
    width: 50%; 
    left: 23%; 
  }
`
const Section = styled.section`

`
const Article = styled.article`
margin: 0 auto;
padding: 0 2rem;`


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

    const location = window.localStorage.getItem("location") || "haringey"
    console.log(location)
    console.log(content.plastic[location]["what_material"])
    return ( 
        <>
    <Section>
        <Title>What is recyclable? </Title>
        <Article> 
        {content ? content[material][location].what_material: "no info"}
        </Article>
    </Section>
    <Section>
    <Title>Where can I recycle {material} in {location}?</Title>
    <Article>
    {content ? content[material][location].how_to_recycle: "no info"}

    </Article>

    </Section>
    <Section>
        <Title>What happens to my recycled {material}?</Title>  
        <Article>
        {content ? content[material].what_happens: "no info"}

        </Article>

    </Section>
    <Section>
        <Title>The impact of recycling our {material} </Title>  
        <Article>
        {content ? content[material].impact: "no info"}

        </Article>
    </Section>
  </>
  )
}
