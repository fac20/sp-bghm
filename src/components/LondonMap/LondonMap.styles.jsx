import styled from "styled-components";

export const Svg = styled.svg.attrs({
  version: "1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "82%",
  height: "auto",
  display: "block",
  viewBox: "0 0 960 960",
})`
  /* NOTE: Can change width within the backticks using media queries */
  /*width: 900px; 
  height: 900px; */
  .clicked {
    fill: #fc8c03;
  }
  &:hover {
    fill: #000;
  }
`;
