import styled from "styled-components";

export const Div = styled.div`
  margin: 7rem 1rem;
  /* text-align: center; */
`;
export const Section = styled.section`
  display: block;
  display: grid;
  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  margin: 0 auto;
  max-width: 100ch;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, 42vw);
  }
`;

export const Span = styled.span`
  color: var(--very-dark-green);
  text-align: center;
`;

export const Button = styled.button`
  margin: 1rem auto;
  background-color: var(--very-dark-green);
  border: 1px;
  color: var(--very-light-green);
  font-weight: bold;
  font: inherit;
  line-height: 1;
  margin: 1rem auto;
  padding: 1rem;

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
    box-shadow: 0px 15px 20px hsla(33, 98%, 50%, 0.2) inset;
    color: var(--dark-orange);
  }
  &:hover:before {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
