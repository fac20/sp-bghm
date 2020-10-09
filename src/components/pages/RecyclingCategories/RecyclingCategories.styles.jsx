import styled from "styled-components";

export const Div = styled.div`
  margin: 1rem;
  /* text-align: center; */
`;
export const Section = styled.section`
  display: block;
  display: grid;
  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  margin: 0 auto;
  max-width: 100ch;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 42vw);
  }
`;

export const Span = styled.span`
  color: var(--very-dark-green);
  text-align: center;
`;

export const Button = styled.button`
  background-color: var(--mid-dark-green);
  border: 3px solid var(--light-green);
  color: var(--very-light-green);
  font-weight: bold;
  font: inherit;
  line-height: 1;
  margin: 1rem auto;
  padding: 1rem;
`;
