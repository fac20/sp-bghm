import React from "react"
import { Title } from "./Title.styles"
// import { useParams } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { AiOutlineHome } from "react-icons/ai";

export default function TitleBar (){

return( <Title>
<IconContext.Provider value={{ color: "var(--main-orange)" , size: '3rem', className: "home-icon"}}>
   <a href="/"><AiOutlineHome/></a>
</IconContext.Provider>
  <h1>Recycling in London</h1>
</Title>)
}