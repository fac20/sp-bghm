import styled from "styled-components";
import errorImage from "../../assets/page-not-found.svg";

export const ErrorBg = styled.div`
  background-image: url(${errorImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Button = styled.button`
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition: background-color 0.3s, color 0.3s;
  background: var(--light-green);
  border-radius: 30px;
  border: none;
  color: #081c15;
  float: left; //aligns them next to one another
  margin: 1em;
  padding: 1em 2em;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 1;
  /* min-width: 150px;
	max-width: 250px; */
  /* display: block; */
  /* background: none; */
  /* color: inherit; */
  /* vertical-align: middle; */
  /* -webkit-backface-visibility: hidden; */
  /* this will create the orange border that appears on hover*/
  &:before {
    -webkit-transform: scale3d(0.6, 0.6, 1);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    border-radius: inherit;
    border: 2px solid var(--main-orange);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute; //makes the content fit vertically within the button
    top: 0; //keeps content within button during hover
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    width: 100%; //makes the orange borders cover the button
    z-index: -1;
    /* -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1); */
  }
  &:hover {
    background-color: var(--light-orange);
    box-shadow: 0px 15px 20px hsla(33, 98%, 50%, 0.2) inset;
    color: var(--main-orange);
  }
  &:hover:before {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
