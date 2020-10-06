import styled from "styled-components";
import errorImage from "../../../assets/page-not-found.svg";

export const ErrorBg = styled.div`
  background-image: url(${errorImage});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.button`
  float: left; //aligns them next to one another
  border-radius: 30px;
  /* min-width: 150px;
	max-width: 250px; */
  /* display: block; */
  margin: 1em;
  padding: 1em 2em;
  border: none;
  /* background: none; */
  /* color: inherit; */
  /* vertical-align: middle; */
  position: relative;
  z-index: 1;
  /* -webkit-backface-visibility: hidden; */
  -moz-osx-font-smoothing: grayscale;
  background: var(--light-green);
  color: #081c15;
  -webkit-transition: background-color 0.3s, color 0.3s;
  transition: background-color 0.3s, color 0.3s;
  /* this will create the orange border that appears on hover*/
  &:before {
    content: "";
    position: absolute; //makes the content fit vertically within the button
    top: 0; //keeps content within button during hover
    left: 0;
    width: 100%; //makes the orange borders cover the button
    height: 100%;
    border: 2px solid var(--main-orange);
    z-index: -1;
    border-radius: inherit;
    opacity: 0;
    -webkit-transform: scale3d(0.6, 0.6, 1);
    transform: scale3d(0.6, 0.6, 1);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    /* -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1); */
  }
  &:hover {
    background-color: var(--light-orange);
    color: var(--main-orange);
    box-shadow: 0px 15px 20px hsla(33, 98%, 50%, 0.2) inset;
  }
  &:hover:before {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
`;
