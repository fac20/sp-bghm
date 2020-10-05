import React from "react";
import styled from "styled-components";
import useLocation from "../../hooks/getPostcode.js";
import { useHistory } from "react-router-dom";

const Title = styled.h3`
  text-decoration: none;
  letter-spacing: 0.15em;
  color: var(--very-dark-green);
`;
const PostcodeForm = styled.form`
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
const Label = styled.label`
  font-weight: 600;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  &:hover {
    border-radius: 3px;
  }
`;

const Input = styled.input`
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

const PostCodeInput = styled(Input)``;

const SubmitInput = styled(Input)``;

export default function Form() {
  const [postcode, setPostcode] = React.useState("");
  const [postcodeErrorMessage, setPostcodeErrorMessage] = React.useState("");
  const history = useHistory();
  useLocation({ postcode, setPostcodeErrorMessage, history });
  const storeLocation = (event) => {
    //  prevent default
    event.preventDefault();
    //  get  postcode from user input
    setPostcode(event.target.postcode.value);
  };

  return (
    <PostcodeForm onSubmit={storeLocation}>
      <Label htmlFor="postcode">Enter your postcode:</Label>
      <PostCodeInput name="postcode" id="postcode" required />
      <SubmitInput type="submit" value="Let's recycle!" />
      {postcodeErrorMessage ? <Title>{postcodeErrorMessage}</Title> : null}
    </PostcodeForm>
  );
}
