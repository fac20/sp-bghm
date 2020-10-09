import styled from "styled-components";

export const Title = styled.h3`
  color: var(--very-dark-green);
  letter-spacing: 0.15em;
  text-decoration: none;
`;
export const Form = styled.form`
  background: var(--very-light-green);
  border-radius: 20px;
  border: 2px solid var(--very-dark-green);
  color: var(--very-dark-green);
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 60ch;
  padding: 1rem 2rem;
`;
export const Label = styled.label`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 2px solid var(--dark-green);
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
