import styled from "styled-components";

export const LocationCheck = styled.span`
  display: ${(props) => (props.hidden ? "none" : "initial")};
`;

export const LocationButton = styled.button`
  margin: 1rem auto 0 auto;
  color: var(--very-dark-green);
  background-color: var(--light-green);
  border: 0px;
  border-radius: 2rem;
  padding: 0 2rem;

  /* button hover and glow effect */
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition: background-color 0.3s, color 0.3s;
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 1;
  &:before {
    -webkit-transform: scale3d(0.6, 0.6, 1);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    border-radius: inherit;
    border: 2px solid var(--main-orange);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    width: 100%;
    z-index: -1;
  }
  &:hover {
    background-color: var(--light-orange);
    box-shadow: 0px 15px 20px var(--clear-orange) inset;
    color: var(--dark-orange);
  }
  &:hover:before {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

export const Div = styled.div`
  margin: 7rem 1rem;
`;

export const InstructionArticle = styled.article`
  background-color: var(--very-dark-green);
  border-radius: 1rem;
  border: 1px solid var(--very-dark-green);
  color: var(--very-light-green);
  font-weight: 900;
  margin: 1rem auto;
  max-width: 60ch;
  padding: 0rem 2rem;
  text-align: justify;
`;
