import styled from "styled-components";

export const Svg = styled.svg.attrs({
  version: "1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "82%",
  height: "auto",
  cursor: "pointer",
  display: "block",
  viewBox: "0 0 1500 1500",
})`
  /* NOTE: Can change width within the backticks using media queries */
  /*width: 900px; 
  height: 900px; */
  .clicked {
    fill: var(--main-orange);
  }
  &:hover {
    fill: #000;
  }
`;
