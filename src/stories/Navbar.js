import React, { useState } from "react";
import PropTypes from "prop-types";
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
      <Input
        type="radio"
        name="slideItem"
        value="0%"
        id="slide-item-1"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-1">
        <a href="#what">
          <PTag>★</PTag>
          <Span>What's recyclable?</Span>
        </a>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        value="20%"
        id="slide-item-2"
        onChange={changeMargin}
      />

      <Label htmlFor="slide-item-2">
        <PTag>★</PTag>
        <Span>
          <a href="#where">Where to recycle</a>
        </Span>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        value="40%"
        id="home"
        onChange={changeMargin}
      />
      <Label htmlFor="home">
        <PTag>H</PTag>
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
        <PTag>★</PTag>
        <Span>
          <a href="#then">What happens?</a>
        </Span>
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
