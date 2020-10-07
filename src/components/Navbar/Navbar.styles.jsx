import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  bottom: 0;
  height: 20vh;
  font-family: arial, sans-serif;
  position: fixed;
  max-width: auto;
  width: 100%;
  margin: 0 1rem;
  overflow: hidden;
  z-index: 8;
  @media (min-width: 780px){
    top: 82.88px;
    /* bottom: 90vh; */
  }
  
`;

export const Label = styled.label`
  width: 20%;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: block;
  float: left;
  color: var(--very-dark-green);
  opacity: 0.2;
  &:hover {
    cursor: pointer;
    color: var(main-green);
  }
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
`;

export const Input = styled.input`
  display: none;
  &:checked + label {
    opacity: 1;
    display: block;
  }
`;

export const DivBar = styled.div`
  width: 20%;
  height: 0.6rem;
  background: var(--very-dark-green);
  border-radius: 0.1rem;
  margin-left: ${(props) => props.margin};
`;

export const PTag = styled.p`
  font-size: 1.2 rem;
  border: solid 0.3rem var(--very-dark-green);
  text-align: center;
  height: 5rem;
  width: 5rem;
  display: block;
  margin: 10% auto;
  line-height: 3.125rem;
  border-radius: 50%;
`;

export const Span = styled.span`
  display: block;
  padding: 0.6rem;
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
