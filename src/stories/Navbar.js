import React from "react";

import {
  Nav,
  NavLinks,
  NavLink,
  AnchorTag,
  Span,
  Title,
  HomeIcon,
  RecycleIcon,
  LocationIcon,
  SkipNextIcon,
  EarthIcon,
} from "../components/Navbar/Navbar.styles.jsx";

export const Navbar = ({ primary, backgroundColor, size, label, ...props }) => {
  const location = window.localStorage.getItem("location").toLowerCase();
  const pathname = window.location.pathname;
  const page =
    pathname === "/"
      ? "home"
      : pathname === `/categories/${location}`
      ? "categories"
      : "moreInfo";

  // const changeMargin = (e) => {
  //   setMargin(e.target.parentElement.parentElement.value);
  // };
  return (
    <Nav>
      <NavLinks>
        {page === "home" ? (
          <Title>
            <h1>Recycling in London</h1>
          </Title>
        ) : page === "categories" ? (
          <Title>
            <AnchorTag href="/">
              <HomeIcon size="30" title="Go to homepage" />
            </AnchorTag>
            <h1>Recycling in London</h1>
          </Title>
        ) : (
          <>
            <NavLink value="0%">
              <AnchorTag href="/">
                <HomeIcon size="30" title="Go to homepage" />
                <Span>Home</Span>
              </AnchorTag>
            </NavLink>

            <NavLink value="20%">
              <AnchorTag href="#what">
                <RecycleIcon size="30" title="What can I recycle" />
                <Span>What's recyclable</Span>
              </AnchorTag>
            </NavLink>

            <NavLink value="40%">
              <AnchorTag href="#where">
                <LocationIcon size="30" title="Where can I recycle" />
                <Span>Where can I recycle</Span>
              </AnchorTag>
            </NavLink>
            <NavLink value="60%">
              <AnchorTag href="#then">
                <SkipNextIcon
                  size="30"
                  title="What happens to my recycling next"
                />
                <Span>What happens next</Span>
              </AnchorTag>
            </NavLink>
            <NavLink value="80%">
              <AnchorTag href="#impact">
                <EarthIcon size="30" title="Impact on earth" />
                <Span>Impact</Span>
              </AnchorTag>
            </NavLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};
