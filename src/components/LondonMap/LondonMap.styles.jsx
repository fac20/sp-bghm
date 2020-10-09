import styled from "styled-components";

const MapSVG = styled.svg.attrs({
  version: "1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "100%",
  height: "auto",
  cursor: "pointer",
  display: "block",
  viewBox: "0 0 1442 1117",
})`
  .clicked {
    fill: var(--main-orange);
  }
  &:hover {
    fill: #000;
  }
`;

export const SVG = styled(MapSVG)`
  padding: 0;
  margin: auto;
  max-width: 100ch;
`;

/* NOTE: Can change width within the backticks using media queries */
/*width: 900px; 
  height: 900px; */
