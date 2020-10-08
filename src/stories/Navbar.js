import React, { useState } from "react";




// import { AiOutlineHome } from "react-icons/ai";

import {
  Nav,
 NavLinks,
 NavLink,
 AnchorTag,
  Span,
  DivClear,
  DivSlider,
  DivBar,
  Title,
  HomeIcon,
  RecycleIcon,
  LocationIcon,
  SkipNextIcon,
  EarthIcon
} from "../components/Navbar/Navbar.styles.jsx";


export const Navbar = ({ primary, backgroundColor, size, label, ...props }) => {
  const location = window.localStorage.getItem("location").toLowerCase();
  const pathname = window.location.pathname
  const page = 
  pathname === '/'
  ? "home"
  : pathname === `/categories/${location}`
  ? "categories"
  : "moreInfo"

  const [margin, setMargin] = useState("0%");
  const changeMargin = (e) => {
    setMargin(e.target.parentElement.parentElement.value);
  };
  return (
    <Nav>
{page === "home"?
 <Title>
   <h1>Recycling in London fnp</h1>
 </Title>
:
  page === "categories"? 
  <Title>
    <AnchorTag href="/">
    <HomeIcon size="30" title="Go to homepage"/>
    </AnchorTag>
    <h1>Recycling in London</h1>
  </Title>:

  <NavLinks value="0%">
  <NavLink >
    <AnchorTag href="/" onClick={changeMargin}>
    <HomeIcon size="30" title="Go to homepage"/>
      <Span>Home</Span>
    </AnchorTag>
  </NavLink>

<NavLink value="20%">
<AnchorTag href="#what" onClick={changeMargin}>
<RecycleIcon size="30" title="What can I recycle"/>
<Span>What's recyclable</Span>
</AnchorTag>
</NavLink>

<NavLink value="40%">
<AnchorTag href="#where" onClick={changeMargin}>
<LocationIcon size="30" title="Where can I recycle"/>
<Span>Where can I recycle</Span>
</AnchorTag>

</NavLink>
<NavLink value="60%">
<AnchorTag href="#then" onClick={changeMargin}>
<SkipNextIcon size="30" title="What happens to my recycling next"/>
<Span>What happens next</Span>
</AnchorTag>
</NavLink>
<NavLink value="80%">
<AnchorTag href="#impact" onClick={changeMargin}>
<EarthIcon size="30" title="Impact on earth"/>
  <Span>Impact</Span>
</AnchorTag>
</NavLink>
</NavLinks>
}



</Nav>
  );
};
