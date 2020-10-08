import styled from "styled-components";

export const LocationButton = styled.button`
  margin: 1rem auto 0 auto;
  color: var(--very-dark-green);
  background-color: var(--light-green);
  border: 2px solid var(--very-dark-green);
  border-radius: 2rem;
  padding: 0 2rem;
  &:hover {
    background-color: var(--mid-green);
    color: white;
  }
`;

export const Div = styled.div`
  margin: 1rem;
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
