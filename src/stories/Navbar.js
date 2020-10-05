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
        checked="true"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-1">
        <PTag>icon1</PTag>
        <Span>Title</Span>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        value="20%"
        id="slide-item-2"
        onChange={changeMargin}
      />

      <Label htmlFor="slide-item-2">
        <PTag>Icon2</PTag>
        <Span>Title</Span>
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
        <Span>Home</Span>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        id="slide-item-3"
        value="60%"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-3">
        <PTag>icon3</PTag>
        <Span>Title</Span>
      </Label>

      <Input
        type="radio"
        name="slideItem"
        id="slide-item-4"
        value="80%"
        onChange={changeMargin}
      />
      <Label htmlFor="slide-item-4">
        <PTag>icon4</PTag>
        <Span>Title</Span>
      </Label>

      <DivClear />
      <DivSlider>
        <DivBar margin={margin} />
      </DivSlider>
    </Nav>
  );
};
