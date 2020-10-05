import styled from "styled-components";

export const Title = styled.h3`
  text-decoration: none;
  letter-spacing: 0.15em;
  color: var(--very-dark-green);
`;
export const Form = styled.form`
  background: var(--card-background-green);
  border: 2px solid var(--very-dark-green);
  border-radius: 20px;
  color: var(--very-dark-green);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  width: 50vw;
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  &:hover {
    border-radius: 3px;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: var(--very-dark-green);
  margin: 0.5rem;
  padding: 10px;
  width: 100%;
  &:hover {
    background: var(--nearly-white);
  }
`;

export const PostCodeInput = styled(Input)``;

export const SubmitInput = styled(Input)``;
