import styled from "styled-components";

export const Div = styled.div`
  margin: 1rem;
  /* text-align: center; */
`;
export const Section = styled.section`
  display: block;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem 1rem;
  max-width: 100ch;
  margin: 0 auto;
  @media (max-width: 768px) {
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
  font: inherit;
  font-weight: bold;
  line-height: 1;
  padding: 1rem;
  border: 3px solid var(--light-green);
`;
