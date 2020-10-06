import styled from "styled-components";

export const Div = styled.div`
  color: var(--very-dark-green);
  text-align: center;
`;
export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-gap: 1rem 1rem;
  padding: 2rem;
  width: 100%;
`;

export const Span = styled.span`
  margin: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  margin: auto;
  background-color: var(--mid-dark-green);
  border: 1px;
  color: var(--very-light-green);
  font: inherit;
  font-weight: bold;
  line-height: 1;
  padding: 1rem;
  border: 3px solid var(--light-green);
`;
