import styled from "styled-components";

import { Home } from "@styled-icons/boxicons-regular/Home";
import { Recycle } from "@styled-icons/boxicons-regular/Recycle";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { SkipNext } from "@styled-icons/material-twotone/SkipNext";
import { Earth } from "@styled-icons/ionicons-outline/Earth";

export const Nav = styled.nav`
  position: fixed;
  /* display: flex; */
  top: 0;
  left: 0;
  right: 0;
  /* flex-direction: column; */
  background-color: var(--very-dark-green);
  width: 100%;

  z-index: 2;
  /* align-self: flex-end; */
  @media (min-width: 480px) {
    /* top: 82.88px; */
  }
`;

export const HomeIcon = styled(Home)`
  color:var(--light-green) &:hover {
    fill: var(--light-orange);
  }
`;
export const Title = styled.section`
  display: flex;
  ${HomeIcon} {
    position: fixed;
    left: 1.5rem;
    margin-top: 0.9rem;
    right: 1rem;
  }
  justify-content: center;
  color: var(--very-light-green);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  /* position: fixed;  */
  text-align: center;
  width: 100%;

  /* border: 1px solid var(--very-dark-green); */
`;

export const NavLinks = styled.ul`
  color: var(--light-green);
  display: flex;
  justify-content: space-evenly;
  /* background-color: black; */
  /* bottom: 0; */
  /* height: 20vh; */
  font-family: arial, sans-serif;
  /* position: fixed; */
  /* max-width: auto; */
  /* width: 100%; */
  /* margin: 0 1rem; */
  overflow: hidden;
  /* z-index: 8; */
`;
export const NavLink = styled.li`
  /* display: flex; */
  /* width: 20%; */
  text-align: center;
  /* text-transform: uppercase; */
  list-style: none;
  text-decoration: none;
  /* letter-spacing: 0.1em; */
  /* display: block; */
  /* float: left; */
  color: var(--light-green);
  /* opacity: 0.2; */
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
`;
export const AnchorTag = styled.a`
  text-decoration: none;

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--main-orange);
  }
  color: var(--light-green);
`;
// export const Input = styled.input`
//   display: none;
//   &:checked + label {
//     opacity: 1;
//     display: block;
//   }
// `;

export const DivBar = styled.div`
  width: 20%;
  height: 0.6rem;
  background: var(--very-dark-green);
  border-radius: 0.1rem;
  margin-left: ${(props) => props.margin};
`;

// export const PTag = styled.p`
//   font-size: 1.2 rem;
//   border: solid 0.3rem var(--very-dark-green);
//   text-align: center;
//   height: 5rem;
//   width: 5rem;
//   display: block;
//   margin: 10% auto;
//   line-height: 3.125rem;
//   border-radius: 50%;
// `;

export const Span = styled.span`
  display: block;
  padding: 0.6rem;
  @media (max-width: 580px) {
    display: none;
  }
`;

export const DivClear = styled.div`
  clear: both;
`;

export const DivSlider = styled.div`
  width: 100%;
  height: 0.3rem;
  display: block;
  background: var(--nearly-white);
  margin-top: 0.6rem;
  border-radius: 0.3;
`;

export const RecycleIcon = styled(Recycle)``;
export const LocationIcon = styled(Location)``;
export const SkipNextIcon = styled(SkipNext)``;
export const EarthIcon = styled(Earth)``;

// :root {
//   --light-orange: hsl(33, 77%, 80%);
//   --main-orange: hsl(33, 77%, 58%);
//   --very-light-green: hsl(129, 53%, 90%);
//   --light-green: hsl(141, 45%, 81%);
//   --less-light-green: hsl(147, 43%, 71%);
//   --mid-light-green: hsl(150, 42%, 62%);
//   --mid-green: hsl(152, 41%, 52%);
//   --mid-dark-green: hsl(153, 40%, 30%);
//   --dark-green: hsl(155, 43%, 18%);
//   --very-dark-green: hsl(159, 56%, 7%);
// }
