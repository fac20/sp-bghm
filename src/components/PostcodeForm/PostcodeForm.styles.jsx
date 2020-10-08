import styled from "styled-components";

export const Title = styled.h3`
  text-decoration: none;
  letter-spacing: 0.15em;
  color: var(--very-dark-green);
`;
export const Form = styled.form`
  background: var(--very-light-green);
  border: 2px solid var(--very-dark-green);
  border-radius: 20px;
  color: var(--very-dark-green);
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 1rem 2rem;
  max-width: 60ch;
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: 1em;
  margin: 0;
`;

export const Input = styled.input`
  border: 2px solid var(--dark-green);
  border-radius: 10px;
  box-sizing: border-box;
  color: var(--very-dark-green);
  margin: 0.5rem 0 0 0;
  padding: 1ch;
  width: 100%;
  &:hover {
    background: var(--mid-light-green);
  }
`;

export const PostCodeInput = styled(Input)``;

export const SubmitInput = styled(Input)`
  background: var(--light-green);
  font-weight: 500;
  &:hover {
    background: var(--mid-green);
    color: white;
  }
`;
