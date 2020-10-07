import React, { useState } from "react";
import { BiRecycle } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
// import { AiOutlineHome } from "react-icons/ai";

import {
  Nav,
  Label,
  Input,
  PTag,
  Span,
  DivClear,
  DivSlider,
  DivBar,
} from "../components/Navbar/Navbar.styles.jsx";


export const Navbar = ({ primary, backgroundColor, size, label, ...props }) => {
  const [margin, setMargin] = useState("0%");
  const changeMargin = (e) => {
    setMargin(e.target.value);
  };
  console.log(margin);
  return (
    <Nav
    // type="nav"
    // className={['storybook-navbar', `storybook-navbar--${size}`].join(' ')}
    // style={backgroundColor && { backgroundColor }}
    // {...props}
    >

      <a href="#what">
      <Input
        type="radio"
        name="slideItem"
        value="0%"
        id="slide-item-1"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-1">
          <PTag>
          <IconContext.Provider value={{ color: "var(--very-dark-green)" , size: '50px', }}>
        <BiRecycle/>
      </IconContext.Provider>
            </PTag>
          <Span>What's recyclable?</Span>
      </Label>
        </a>

      <Input
        type="radio"
        name="slideItem"
        value="20%"
        id="slide-item-2"
        onChange={changeMargin}
      />

      <Label htmlFor="slide-item-2">
      <a href="#where">
          <PTag>
          <IconContext.Provider value={{ color: "var(--very-dark-green)" , size: '50px', }}>
        <BiRecycle/>
      </IconContext.Provider>
            </PTag>
          <Span>Where to recycle</Span>
        </a>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        value="40%"
        id="home"
        onChange={changeMargin}
      />
      <Label htmlFor="home">
        <PTag>
        <IconContext.Provider value={{ color: "var(--main-orange)" , size: '3em', margin: "auto" }}>
        <AiOutlineHome/>
      </IconContext.Provider>
        </PTag>
        <Span>
          <a href="/">Home</a>
        </Span>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        id="slide-item-3"
        value="60%"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-3">
      <a href="#then">
          <PTag>
          <IconContext.Provider value={{ color: "var(--very-dark-green)" , size: '50px', }}>
        <BiRecycle/>
      </IconContext.Provider>
            </PTag>
          <Span>What happens</Span>
        </a>

      </Label>

      <Input
        type="radio"
        name="slideItem"
        id="slide-item-4"
        value="80%"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-4">
        <a href="#impact">
          <PTag>★</PTag>
          <Span>Your Impact</Span>
        </a>
      </Label>

      <DivClear />
      <DivSlider>
        <DivBar margin={margin} />
      </DivSlider>
    </Nav>
  );
};
